import test from 'node:test';
import assert from 'node:assert/strict';
import {studyDocuments,cleanStudyState,chapterProgress} from './study.js';
test('SMM fourth edition has nine distinct chapter learning packages',()=>{const d=studyDocuments[0];assert.equal(d.chapters.length,9);assert.deepEqual(d.chapters.map(c=>c.number),[1,2,3,4,5,6,7,8,9]);assert.equal(new Set(d.chapters.map(c=>c.id)).size,9);for(const c of d.chapters){assert.ok(c.primer&&c.scenario&&c.explanation&&c.goal);assert.equal(c.prompts.length,2);assert.ok(c.options[c.answer]);assert.equal(new URL(c.source).hostname,'www.icao.int');}});
test('read and correct check are independently required for completion',()=>{const c=studyDocuments[0].chapters[0],state=cleanStudyState(null);assert.equal(chapterProgress(c,state).complete,false);state.read.push(c.id);assert.equal(chapterProgress(c,state).complete,false);state.answers[c.id]=(c.answer+1)%3;assert.equal(chapterProgress(c,state).complete,false);state.answers[c.id]=c.answer;assert.equal(chapterProgress(c,state).complete,true);state.read=[];assert.equal(chapterProgress(c,state).complete,false);});
test('stored chapter data rejects unknown keys and invalid answers; limits notes',()=>{const id=studyDocuments[0].chapters[0].id;const state=cleanStudyState({read:[id,id,'unknown'],answers:{[id]:99,unknown:1},notes:{[id]:'a'.repeat(7000),unknown:'x'}});assert.deepEqual(state.read,[id]);assert.deepEqual(state.answers,{});assert.equal(state.notes[id].length,6000);assert.equal(state.notes.unknown,undefined);assert.deepEqual(cleanStudyState(JSON.parse(JSON.stringify(state))),state);});

test('PHAK covers all 17 chapters with FAA sources, locators and detailed teaching',()=>{
 const d=studyDocuments.find(d=>d.id==='phak25c');
 assert.equal(d.authority,'FAA');assert.equal(d.number,'FAA-H-8083-25C');
 assert.deepEqual(d.chapters.map(c=>c.number),Array.from({length:17},(_,i)=>i+1));
 const ids=studyDocuments.flatMap(d=>d.chapters.map(c=>c.id));assert.equal(new Set(ids).size,ids.length);
 let lastPage=0;
 for(const c of d.chapters){
  assert.ok(c.detailSections.length>=5);assert.ok(c.confusions.length>=2);
  assert.ok(c.detailSections.every(s=>s.locator&&s.paragraphs.length===2&&s.paragraphs.every(p=>p.length>40)));
  const source=new URL(c.source);assert.equal(source.hostname,'www.faa.gov');
  const page=Number(source.hash.replace('#page=',''));assert.ok(page>lastPage);lastPage=page;
  assert.ok(c.options[c.answer]);assert.ok(c.explanation&&c.scenario&&c.goal);
 }
});
test('ICAO and PHAK progress and notes persist independently in the shared store',()=>{
 const a=studyDocuments[0].chapters[0],b=studyDocuments.find(d=>d.id==='phak25c').chapters[0];
 const state=cleanStudyState({read:[a.id,b.id],answers:{[a.id]:a.answer,[b.id]:(b.answer+1)%3},notes:{[a.id]:'ICAO 筆記',[b.id]:'PHAK 筆記'}});
 assert.ok(chapterProgress(a,state).complete);assert.equal(chapterProgress(b,state).complete,false);
 assert.equal(state.notes[a.id],'ICAO 筆記');assert.equal(state.notes[b.id],'PHAK 筆記');
 assert.deepEqual(cleanStudyState(JSON.parse(JSON.stringify(state))),state);
});

test('PHAK Chapter 1 preserves the supplied outline, parents and original page locations',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[0];
 const expected=[['Introduction','1-1'],['History of Flight','1-2'],['History of the Federal Aviation Administration (FAA)','1-3'],['Transcontinental Air Mail Route','1-4'],['Federal Certification of Pilots and Mechanics','1-4'],['The Federal Aviation Act of 1958','1-6'],['Department of Transportation (DOT)','1-6'],['ATC Automation','1-6'],['The Professional Air Traffic Controllers Organization (PATCO) Strike','1-6'],['The Airline Deregulation Act of 1978','1-7'],['The Role of the FAA','1-7'],['The Code of Federal Regulations (CFR)','1-7'],['Primary Locations of the FAA','1-8'],['Field Offices','1-8'],['Aviation Safety Inspector (ASI)','1-9'],['FAA Safety Team (FAASTeam)','1-9'],['Obtaining Assistance from the FAA','1-9'],['Aeronautical Information Manual (AIM)','1-9'],['Handbooks','1-10'],['Advisory Circulars (ACs)','1-10'],['Flight Publications','1-11'],['Pilot and Aeronautical Information','1-12'],['Notices to Airmen (NOTAMs)','1-12'],['Safety Program Airmen Notification System (SPANS)','1-14'],['Aircraft Classifications and Ultralight Vehicles','1-14'],['Pilot Certifications','1-16'],['Privileges:','1-16'],['Limitations:','1-17'],['Recreational Pilot','1-17'],['Privileges:','1-17'],['Limitations:','1-17'],['Private Pilot','1-17'],['Commercial Pilot','1-18'],['Airline Transport Pilot','1-18'],['Selecting a Flight School','1-18'],['How To Find a Reputable Flight Program','1-19'],['How To Choose a Certificated Flight Instructor (CFI)','1-19'],['The Student Pilot','1-20'],['Basic Requirements','1-20'],['Medical Certification Requirements','1-20'],['Becoming a Pilot','1-21'],['Knowledge and Skill Tests','1-21'],['Knowledge Tests','1-21'],['When To Take the Knowledge Test','1-22'],['Practical Test','1-22'],['When To Take the Practical Test','1-23'],['Who Administers the FAA Practical Tests?','1-23'],['Role of the Certificated Flight Instructor','1-23'],['Role of the Designated Pilot Examiner','1-24'],['Chapter Summary','1-24']];
 assert.equal(c.detailSections.length,54);
 assert.deepEqual(c.detailSections.filter(s=>!s.supplementalHeading).map(s=>[s.english,s.printedPage]),expected);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent),'parent precedes child: '+s.id);seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/03_phak_ch1.pdf#page='+s.printedPage.split('-')[1]);}
 for(const parent of ['sport','recreational'])assert.deepEqual(c.detailSections.filter(s=>s.parent===parent).map(s=>s.english),['Privileges:','Limitations:']);
 assert.ok(c.detailSections.find(s=>s.id==='practical').currentNote);
 assert.equal(c.checked,'2026-09-10');
});

test('Chapter 2 covers all 60 TOC sections with distinct model and automation hierarchies',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[1];
 assert.equal(c.detailSections.length,60);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/04_phak_ch2.pdf#page='+s.printedPage.split('-')[1]);assert.ok(Number(s.printedPage.split('-')[1])<=32);}
 const children=id=>c.detailSections.filter(s=>s.parent===id).map(s=>s.id);
 assert.deepEqual(children('three-p'),['three-pave','care','team']);
 assert.deepEqual(children('decide'),['decide-detect','decide-estimate','decide-choose','decide-identify','decide-do','decide-evaluate']);
 assert.deepEqual(children('five-ps'),['five-plan','five-plane','five-pilot','five-passengers','five-programming']);
 assert.equal(c.detailSections.filter(s=>s.english==='Risk Management').length,2);
 assert.equal(c.detailSections.find(s=>s.id==='attitudes').points.length,5);
 assert.equal(c.detailSections.find(s=>s.id==='pitfalls').points.length,12);
 assert.equal(c.detailSections.at(-1).printedPage,'2-32');
 assert.deepEqual(c.modelComparison.map(row=>row[0]),['PAVE','5P','3P','CARE','TEAM','DECIDE']);
});

test('Chapter 3 preserves all 26 supplied headings and four original body supplements',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[2];
 const expected=[['Introduction',1],['Aircraft Design, Certification, and Airworthiness',2],['A Note About Light Sport Aircraft',2],['Lift and Basic Aerodynamics',2],['Major Components',3],['Fuselage',3],['Wings',3],['Empennage',6],['Landing Gear',7],['The Powerplant',7],['Subcomponents',8],['Types of Aircraft Construction',8],['Truss Structure',8],['Semimonocoque',9],['Composite Construction',9],['History',9],['Advantages of Composites',10],['Disadvantages of Composites',10],['Fluid Spills on Composites',11],['Lightning Strike Protection',11],['The Future of Composites',12],['Instrumentation: Moving into the Future',12],['Control Instruments',13],['Navigation Instruments',13],['Global Positioning System (GPS)',13],['Chapter Summary',13]];
 assert.equal(c.detailSections.length,30);
 assert.deepEqual(c.detailSections.filter(s=>!s.supplementalHeading).map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 assert.deepEqual(c.detailSections.filter(s=>s.supplementalHeading).map(s=>s.english),['Alternate Types of Wings','Monocoque','Composite Materials in Aircraft','Performance Instruments']);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/05_phak_ch3_0.pdf#page='+s.printedPage.split('-')[1]);}
 assert.equal(c.detailSections.find(s=>s.id==='performance').parent,'instrumentation');
 const lsa=c.detailSections.find(s=>s.id==='lsa');assert.ok(lsa.currentNote.includes('2026-07-24'));assert.ok(lsa.references[0].url.includes('MOSAIC'));
});

test('Chapter 4 covers the supplied 22 headings with source pages and hierarchy',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[3];
 const expected=[['Introduction',1],['Structure of the Atmosphere',1],['Air is a Fluid',2],['Viscosity',2],['Friction',2],['Pressure',3],['Atmospheric Pressure',3],['Pressure Altitude',4],['Density Altitude',4],['Effect of Pressure on Density',4],['Effect of Temperature on Density',4],['Effect of Humidity (Moisture) on Density',5],['Theories in the Production of Lift',5],['Newton’s Basic Laws of Motion',5],['Bernoulli’s Principle of Differential Pressure',6],['Airfoil Design',6],['Low Pressure Above',7],['High Pressure Below',8],['Pressure Distribution',8],['Airfoil Behavior',8],['A Third Dimension',9],['Chapter Summary',9]];
 assert.deepEqual(c.detailSections.map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/06_phak_ch4_0.pdf#page='+s.printedPage.split('-')[1]);}
 assert.deepEqual(c.detailSections.filter(s=>s.parent==='density-altitude').map(s=>s.id),['density-pressure','density-temperature','density-humidity']);
 assert.equal(c.detailSections.find(s=>s.id==='newton').points.length,3);
 for(const id of ['low-pressure','third-dimension'])assert.ok(c.detailSections.find(s=>s.id===id).references.some(r=>new URL(r.url).hostname==='www1.grc.nasa.gov'));
});

test('Chapter 5 preserves all 62 supplied TOC entries with source pages and parents',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[4];
 const expected=[['Forces Acting on the Aircraft',1],['Thrust',2],['Lift',3],['Lift/Drag Ratio',5],['Drag',6],['Parasite Drag',6],['Induced Drag',7],['Weight',8],['Wingtip Vortices',8],['Formation of Vortices',8],['Avoiding Wake Turbulence',9],['Ground Effect',11],['Axes of an Aircraft',12],['Moment and Moment Arm',13],['Aircraft Design Characteristics',14],['Stability',14],['Static Stability',14],['Dynamic Stability',14],['Longitudinal Stability (Pitching)',15],['Lateral Stability (Rolling)',17],['Directional Stability (Yawing)',19],['Free Directional Oscillations (Dutch Roll)',20],['Spiral Instability',20],['Effect of Wing Planform',20],['Aerodynamic Forces in Flight Maneuvers',22],['Forces in Turns',22],['Forces in Climbs',23],['Forces in Descents',24],['Stalls',25],['Angle of Attack Indicators',26],['Basic Propeller Principles',28],['Torque and P-Factor',30],['Torque Reaction',31],['Corkscrew Effect',31],['Gyroscopic Action',31],['Asymmetric Loading (P-Factor)',32],['Load Factors',33],['Load Factors in Aircraft Design',33],['Load Factors in Steep Turns',34],['Load Factors and Stalling Speeds',34],['Load Factors and Flight Maneuvers',36],['Vg Diagram',37],['Rate of Turn',38],['Radius of Turn',39],['Weight and Balance',40],['Effect of Weight on Flight Performance',42],['Effect of Weight on Aircraft Structure',42],['Effect of Weight on Stability and Controllability',42],['Effect of Load Distribution',43],['High Speed Flight',44],['Subsonic Versus Supersonic Flow',44],['Speed Ranges',44],['Mach Number Versus Airspeed',45],['Boundary Layer',46],['Laminar Boundary Layer Flow',46],['Turbulent Boundary Layer Flow',46],['Boundary Layer Separation',46],['Shock Waves',46],['Sweepback',48],['Mach Buffet Boundaries',49],['High Speed Flight Controls',49],['Chapter Summary',51]];
 assert.equal(c.detailSections.length,62);
 assert.deepEqual(c.detailSections.map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/07_phak_ch5_0.pdf#page='+s.printedPage.split('-')[1]);}
 assert.deepEqual(c.detailSections.filter(s=>s.parent==='boundary-layer').map(s=>s.id),['laminar','turbulent','separation']);
 assert.deepEqual(c.detailSections.filter(s=>s.parent==='maneuvers').map(s=>s.id),['turns','climbs','descents']);
 for(const id of ['vg','wake-avoidance']){const s=c.detailSections.find(s=>s.id===id);assert.ok(s.currentNote);assert.ok(s.references.every(r=>new URL(r.url).hostname==='www.faa.gov'));}
});

test('Chapter 6 covers 22 TOC entries and seven original body headings',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[5];
 const expected=[['Introduction',1],['Flight Control Systems',2],['Flight Controls',2],['Primary Flight Controls',2],['Elevator',5],['T-Tail',6],['Stabilator',7],['Canard',7],['Rudder',8],['V-Tail',8],['Secondary Flight Controls',8],['Flaps',8],['Leading Edge Devices',9],['Spoilers',10],['Trim Tabs',10],['Balance Tabs',11],['Servo Tabs',11],['Antiservo Tabs',11],['Ground Adjustable Tabs',11],['Adjustable Stabilizer',12],['Autopilot',12],['Chapter Summary',12]];
 assert.equal(c.detailSections.length,29);
 assert.deepEqual(c.detailSections.filter(s=>!s.supplementalHeading).map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 assert.deepEqual(c.detailSections.filter(s=>s.supplementalHeading).map(s=>s.english),['Ailerons','Adverse Yaw','Differential Ailerons','Frise-Type Ailerons','Coupled Ailerons and Rudder','Flaperons','Trim Systems']);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/08_phak_ch6.pdf#page='+s.printedPage.split('-')[1]);}
 assert.equal(c.detailSections.find(s=>s.id==='flaps').points.length,4);
});

test('Chapter 7 covers 88 TOC entries plus diluter-demand oxygen',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[6];
 assert.equal(c.detailSections.length,89);
 assert.equal(c.detailSections.filter(s=>!s.supplementalHeading).length,88);
 assert.deepEqual(c.detailSections.filter(s=>s.supplementalHeading).map(s=>s.english),['Diluter-Demand Oxygen Systems']);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/09_phak_ch7.pdf#page='+s.printedPage.split('-')[1]);}
 assert.equal(c.detailSections.find(s=>s.id==='diluter-demand').parent,'oxygen');
 assert.ok(c.detailSections.find(s=>s.id==='grades').references.some(r=>new URL(r.url).hostname==='www.faa.gov'));
 assert.ok(c.detailSections.find(s=>s.id==='oximeter').references.some(r=>new URL(r.url).hostname==='www.fda.gov'));
});

test('Chapter 8 covers the 59 supplied entries and seven compass error headings',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[7];
 const expected=[['Introduction',1],['Pitot-Static Flight Instruments',1],['Impact Pressure Chamber and Lines',2],['Static Pressure Chamber and Lines',2],['Altimeter',3],['Principle of Operation',3],['Effect of Nonstandard Pressure and Temperature',4],['Setting the Altimeter',5],['Altimeter Operation',6],['Types of Altitude',6],['Instrument Check',7],['Vertical Speed Indicator (VSI)',7],['Principle of Operation',7],['Instrument Check',8],['Airspeed Indicator (ASI)',8],['Airspeed Indicator Markings',9],['Other Airspeed Limitations',9],['Instrument Check',10],['Blockage of the Pitot-Static System',10],['Blocked Pitot System',10],['Blocked Static System',11],['Electronic Flight Display (EFD)',12],['Airspeed Tape',12],['Attitude Indicator',13],['Altimeter',13],['Vertical Speed Indicator (VSI)',13],['Heading Indicator',13],['Turn Indicator',13],['Tachometer',13],['Slip/Skid Indicator',13],['Turn Rate Indicator',13],['Air Data Computer (ADC)',14],['Trend Vectors',14],['Gyroscopic Flight Instruments',15],['Gyroscopic Principles',15],['Rigidity in Space',15],['Precession',15],['Sources of Power',16],['Turn Indicators',16],['Turn-and-Slip Indicator',16],['Turn Coordinator',17],['Inclinometer',18],['Yaw String',18],['Instrument Check',18],['Attitude Indicator',18],['Heading Indicator',19],['Attitude and Heading Reference System (AHRS)',20],['The Flux Gate Compass System',20],['Remote Indicating Compass',21],['Instrument Check',22],['Angle of Attack Indicators',22],['Compass Systems',23],['Magnetic Compass',23],['Magnetic Compass Induced Errors',24],['The Vertical Card Magnetic Compass',27],['Lags or Leads',27],['Eddy Current Damping',27],['Outside Air Temperature (OAT) Gauge',28],['Chapter Summary',28]];
 assert.equal(c.detailSections.length,66);
 assert.deepEqual(c.detailSections.filter(s=>!s.supplementalHeading).map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 assert.deepEqual(c.detailSections.filter(s=>s.supplementalHeading).map(s=>s.english),['Variation','Deviation','Dip Errors','Northerly Turning Errors','Southerly Turning Errors','Acceleration Error','Oscillation Error']);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/10_phak_ch8.pdf#page='+s.printedPage.split('-')[1]);}
 assert.deepEqual(c.detailSections.filter(s=>s.english==='Instrument Check').map(s=>s.parent),['altimeter','vsi','asi','inclinometer','remote-compass']);
});

test('Chapter 9 covers all 38 TOC entries plus the original AFM heading',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[8];
 const expected=[['Introduction',1],['Preliminary Pages',2],['General (Section 1)',2],['Limitations (Section 2)',2],['Airspeed',2],['Powerplant',3],['Weight and Loading Distribution',3],['Flight Limits',4],['Placards',4],['Emergency Procedures (Section 3)',4],['Normal Procedures (Section 4)',4],['Performance (Section 5)',4],['Weight and Balance/Equipment List (Section 6)',4],['Systems Description (Section 7)',4],['Handling, Service, and Maintenance (Section 8)',5],['Supplements (Section 9)',5],['Safety Tips (Section 10)',6],['Aircraft Documents',6],['Certificate of Aircraft Registration',6],['Airworthiness Certificate',7],['Aircraft Maintenance',8],['Aircraft Inspections',8],['Annual Inspection',8],['100-Hour Inspection',8],['Other Inspection Programs',9],['Altimeter System Inspection',9],['Transponder Inspection',9],['Emergency Locator Transmitter',9],['Preflight Inspections',9],['Minimum Equipment Lists (MEL) and Operations With Inoperative Equipment',9],['Preventive Maintenance',10],['Maintenance Entries',10],['Examples of Preventive Maintenance',10],['Repairs and Alterations',12],['Special Flight Permits',12],['Airworthiness Directives (ADs)',12],['Aircraft Owner/Operator Responsibilities',13],['Chapter Summary',13]];
 assert.equal(c.detailSections.length,39);
 assert.deepEqual(c.detailSections.filter(s=>!s.supplementalHeading).map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 assert.deepEqual(c.detailSections.filter(s=>s.supplementalHeading).map(s=>s.english),['Airplane Flight Manuals (AFM)']);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/11_phak_ch9.pdf#page='+s.printedPage.split('-')[1]);}
 for(const id of ['registration','annual','hundred-hour','altimeter-inspection','transponder-inspection','elt','mel','preventive','entries','special-permit','ads','responsibilities']){
  const s=c.detailSections.find(s=>s.id===id);assert.ok(s.references.length);for(const r of s.references){assert.ok(['www.faa.gov','www.ecfr.gov'].includes(new URL(r.url).hostname));assert.equal(r.checked,'2026-09-11');}
 }
 assert.ok(c.detailSections.find(s=>s.id==='registration').currentNote);
 assert.ok(c.detailSections.find(s=>s.id==='mel').currentNote);
});

test('Chapter 10 covers all 22 TOC entries and the body stability heading',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[9];
 const expected=[['Introduction',1],['Weight Control',1],['Effects of Weight',2],['Weight Changes',2],['Balance, Stability, and Center of Gravity',2],['Effects of Adverse Balance',3],['Stability',3],['Control',3],['Management of Weight and Balance Control',4],['Terms and Definitions',4],['Principles of Weight and Balance Computations',5],['Weight and Balance Restrictions',6],['Determining Loaded Weight and CG',7],['Computational Method',7],['Graph Method',7],['Table Method',9],['Computations With a Negative Arm',10],['Computations With Zero Fuel Weight',10],['Shifting, Adding, and Removing Weight',10],['Weight Shifting',10],['Weight Addition or Removal',11],['Chapter Summary',11]];
 assert.equal(c.detailSections.length,23);
 assert.deepEqual(c.detailSections.filter(s=>!s.supplementalHeading).map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 assert.deepEqual(c.detailSections.filter(s=>s.supplementalHeading).map(s=>s.english),['Stability and Center of Gravity']);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/12_phak_ch10.pdf#page='+s.printedPage.split('-')[1]);}
 assert.deepEqual(c.detailSections.filter(s=>s.parent==='changes').map(s=>s.id),['shifting','addition-removal']);
});

test('Chapter 11 covers every supplied heading and source page',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[10];
 const expected=[["Introduction", 1], ["Importance of Performance Data", 1], ["Structure of the Atmosphere", 2], ["Atmospheric Pressure", 2], ["Pressure Altitude", 3], ["Density Altitude", 3], ["Effects of Pressure on Density", 4], ["Effects of Temperature on Density", 5], ["Effects of Humidity (Moisture) on Density", 5], ["Performance", 5], ["Straight-and-Level Flight", 5], ["Climb Performance", 6], ["Angle of Climb (AOC)", 7], ["Rate of Climb (ROC)", 7], ["Climb Performance Factors", 8], ["Range Performance", 9], ["Region of Reversed Command", 11], ["Takeoff and Landing Performance", 12], ["Runway Surface and Gradient", 12], ["Water on the Runway and Dynamic Hydroplaning", 13], ["Takeoff Performance", 14], ["Landing Performance", 16], ["Performance Speeds", 18], ["Performance Charts", 19], ["Interpolation", 20], ["Density Altitude Charts", 20], ["Takeoff Charts", 20], ["Climb and Cruise Charts", 21], ["Crosswind and Headwind Component Chart", 25], ["Landing Charts", 26], ["Stall Speed Performance Charts", 27], ["Transport Category Aircraft Performance", 28], ["Air Carrier Obstacle Clearance Requirements", 28], ["Chapter Summary", 28]];
 assert.equal(c.detailSections.length,34);
 assert.deepEqual(c.detailSections.map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/13_phak_ch11.pdf#page='+s.printedPage.split('-')[1]);}
});
test('Chapter 12 covers every supplied heading and source page',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[11];
 const expected=[["Introduction", 1], ["Atmosphere", 2], ["Composition of the Atmosphere", 2], ["Atmospheric Circulation", 3], ["Atmospheric Pressure", 3], ["Coriolis Force", 3], ["Measurement of Atmosphere Pressure", 4], ["Altitude and Atmospheric Pressure", 5], ["Altitude and Flight", 6], ["Altitude and the Human Body", 6], ["Wind and Currents", 7], ["Wind Patterns", 7], ["Convective Currents", 7], ["Effect of Obstructions on Wind", 8], ["Low-Level Wind Shear", 11], ["Wind and Pressure Representation on Surface Weather Maps", 12], ["Atmospheric Stability", 12], ["Inversion", 13], ["Moisture and Temperature", 13], ["Relative Humidity", 13], ["Temperature/Dew Point Relationship", 13], ["Methods by Which Air Reaches the Saturation Point", 14], ["Dew and Frost", 15], ["Fog", 15], ["Clouds", 15], ["Ceiling", 17], ["Visibility", 17], ["Precipitation", 17], ["Air Masses", 17], ["Fronts", 18], ["Warm Front", 18], ["Flight Toward an Approaching Warm Front", 19], ["Cold Front", 20], ["Fast-Moving Cold Front", 20], ["Flight Toward an Approaching Cold Front", 20], ["Comparison of Cold and Warm Fronts", 20], ["Wind Shifts", 21], ["Stationary Front", 21], ["Occluded Front", 21], ["Thunderstorms", 22], ["Hazards", 23], ["Squall Line", 23], ["Tornadoes", 23], ["Turbulence", 24], ["Icing", 24], ["Hail", 25], ["Ceiling and Visibility", 25], ["Effect on Altimeters", 25], ["Lightning", 25], ["Engine Water Ingestion", 25], ["Chapter Summary", 25]];
 assert.equal(c.detailSections.length,51);
 assert.deepEqual(c.detailSections.map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/14_phak_ch12.pdf#page='+s.printedPage.split('-')[1]);}
});


test('Chapter 13 preserves every supplied heading, hierarchy and source page',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[12];
 const expected=[["Introduction", 1], ["Observations", 2], ["Surface Aviation Weather Observations", 2], ["Air Route Traffic Control Center (ARTCC)", 2], ["Upper Air Observations", 2], ["Radar Observations", 3], ["Satellite", 4], ["Service Outlets", 4], ["Flight Service Station (FSS)", 4], ["Telephone Information Briefing Service (TIBS)", 4], ["Hazardous Inflight Weather Advisory Service (HIWAS)", 4], ["Transcribed Weather Broadcast (TWEB) (Alaska Only)", 4], ["Weather Briefings", 5], ["Standard Briefing", 5], ["Abbreviated Briefing", 5], ["Outlook Briefing", 5], ["Aviation Weather Reports", 5], ["Aviation Routine Weather Report (METAR)", 6], ["Pilot Weather Reports (PIREPs)", 8], ["Aviation Forecasts", 9], ["Terminal Aerodrome Forecasts (TAF)", 9], ["Area Forecasts (FA)", 10], ["Inflight Weather Advisories", 11], ["AIRMET", 11], ["SIGMET", 12], ["Convective Significant Meteorological Information (WST)", 12], ["Winds and Temperature Aloft Forecast (FB)", 13], ["Weather Charts", 13], ["Surface Analysis Chart", 13], ["Weather Depiction Chart", 15], ["Significant Weather Prognostic Charts", 15], ["ATC Radar Weather Displays", 16], ["Weather Avoidance Assistance", 18], ["Electronic Flight Displays (EFD) /Multi-Function Display (MFD) Weather", 18], ["Weather Products Age and Expiration", 18], ["What Can Pilots Do?", 19], ["NEXRAD Abnormalities", 21], ["NEXRAD Limitations", 21], ["AIRMET/SIGMET Display", 21], ["Graphical METARs", 21], ["Data Link Weather", 21], ["Data Link Weather Products", 23], ["Flight Information Service- Broadcast (FIS-B)", 23], ["Pilot Responsibility", 24], ["Chapter Summary", 24]];
 assert.equal(c.detailMode,'outline');assert.equal(c.detailSections.length,45);
 assert.deepEqual(c.detailSections.map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/15_phak_ch13.pdf#page='+s.printedPage.split('-')[1]);}
 assert.equal(c.checked,'2026-09-11');
});


test('Chapter 14 preserves every supplied heading, hierarchy and source page',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[13];
 const expected=[["Introduction", 1], ["Airport Categories", 1], ["Types of Airports", 2], ["Towered Airport", 2], ["Nontowered Airport", 2], ["Sources for Airport Data", 3], ["Aeronautical Charts", 3], ["Chart Supplement U.S. (formerly Airport/Facility Directory)", 3], ["Notices to Airmen (NOTAM)", 4], ["Automated Terminal Information Service (ATIS)", 5], ["Airport Markings and Signs", 5], ["Runway Markings and Signs", 5], ["Relocated Runway Threshold", 5], ["Displaced Threshold", 5], ["Runway Safety Area", 6], ["Runway Safety Area Boundary Sign", 6], ["Runway Holding Position Sign", 6], ["Runway Holding Position Marking", 8], ["Runway Distance Remaining Signs", 8], ["Runway Designation Marking", 8], ["Land and Hold Short Operations (LAHSO)", 10], ["Taxiway Markings and Signs", 11], ["Enhanced Taxiway Centerline Markings", 12], ["Destination Signs", 12], ["Holding Position Signs and Markings for an Instrument Landing System (ILS) Critical Area", 12], ["Holding Position Markings for Taxiway/Taxiway Intersections", 14], ["Marking and Lighting of Permanently Closed Runways and Taxiways", 14], ["Temporarily Closed Runways and Taxiways", 15], ["Other Markings", 15], ["Airport Signs", 15], ["Airport Lighting", 16], ["Airport Beacon", 16], ["Approach Light Systems", 16], ["Visual Glideslope Indicators", 16], ["Visual Approach Slope Indicator (VASI)", 16], ["Other Glidepath Systems", 16], ["Runway Lighting", 17], ["Runway End Identifier Lights (REIL)", 17], ["Runway Edge Lights", 17], ["In-Runway Lighting", 18], ["Control of Airport Lighting", 18], ["Taxiway Lights", 19], ["Omnidirectional", 19], ["Clearance Bar Lights", 19], ["Runway Guard Lights", 19], ["Stop Bar Lights", 19], ["Obstruction Lights", 19], ["New Lighting Technologies", 19], ["Wind Direction Indicators", 20], ["Traffic Patterns", 20], ["Example: Key to Traffic Pattern Operations— Single Runway", 21], ["Example: Key to Traffic Pattern Operations— Parallel Runways", 21], ["Radio Communications", 22], ["Radio License", 22], ["Radio Equipment", 22], ["Using Proper Radio Procedures", 22], ["Lost Communication Procedures", 23], ["Air Traffic Control (ATC) Services", 24], ["Primary Radar", 24], ["ATC Radar Beacon System (ATCRBS)", 24], ["Transponder", 25], ["Automatic Dependent Surveillance– Broadcast (ADS-B)", 26], ["Radar Traffic Advisories", 26], ["Wake Turbulence", 26], ["Vortex Generation", 26], ["Terminal Area", 27], ["En Route", 27], ["Vortex Behavior", 27], ["Vortex Avoidance Procedures", 28], ["Collision Avoidance", 28], ["Clearing Procedures", 28], ["Training Operations", 30], ["Scanning Techniques for Traffic Avoidance", 30], ["Best Practices to See and Avoid", 30], ["Pilot Deviations (PDs)", 31], ["Runway Incursion Avoidance", 31], ["Causal Factors of Runway Incursions", 32], ["Runway Confusion", 32], ["Causal Factors of Runway Confusion", 32], ["ATC Instructions", 33], ["ATC Instructions—“Hold Short”", 33], ["ATC Instructions—Explicit Runway Crossing", 34], ["ATC Instructions—“Line Up and Wait” (LUAW)", 34], ["ATC Instructions—“Runway Shortened”", 35], ["Pre-Landing, Landing, and After-Landing", 35], ["Engineered Materials Arresting Systems (EMAS)", 36], ["Incidents", 36], ["EMAS Installations and Information", 37], ["Pilot Considerations", 37], ["Chapter Summary", 38]];
 assert.equal(c.detailMode,'outline');assert.equal(c.detailSections.length,90);
 assert.deepEqual(c.detailSections.map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/16_phak_ch14_0.pdf#page='+s.printedPage.split('-')[1]);}
 assert.equal(c.checked,'2026-09-11');
});


test('Chapter 15 preserves every supplied heading, hierarchy and source page',()=>{
 const c=studyDocuments.find(d=>d.id==='phak25c').chapters[14];
 const expected=[["Introduction", 1], ["Controlled Airspace", 2], ["Class A Airspace", 2], ["Class B Airspace", 2], ["Class C Airspace", 2], ["Class D Airspace", 2], ["Class E Airspace", 2], ["Uncontrolled Airspace", 3], ["Class G Airspace", 3], ["Special Use Airspace", 3], ["Prohibited Areas", 3], ["Restricted Areas", 3], ["Warning Areas", 4], ["Military Operation Areas (MOAs)", 4], ["Alert Areas", 4], ["Controlled Firing Areas (CFAs)", 4], ["Other Airspace Areas", 4], ["Local Airport Advisory (LAA)", 6], ["Military Training Routes (MTRs)", 6], ["Temporary Flight Restrictions (TFR)", 6], ["Published VFR Routes", 6], ["Terminal Radar Service Areas (TRSAs)", 7], ["National Security Areas (NSAs)", 7], ["Air Traffic Control and the National Airspace System", 7], ["Coordinating the Use of Airspace", 7], ["Operating in the Various Types of Airspace", 7], ["Basic VFR Weather Minimums", 7], ["Operating Rules and Pilot/Equipment Requirements", 8], ["Ultralight Vehicles", 11], ["Unmanned Free Balloons", 11], ["Unmanned Aircraft Systems", 11], ["Parachute Jumps", 11], ["Chapter Summary", 11]];
 assert.equal(c.detailMode,'outline');assert.equal(c.detailSections.length,33);
 assert.deepEqual(c.detailSections.map(s=>[s.english,Number(s.printedPage.split('-')[1])]),expected);
 const seen=new Set();for(const s of c.detailSections){assert.ok(!seen.has(s.id));if(s.parent)assert.ok(seen.has(s.parent));seen.add(s.id);assert.equal(s.source,'https://www.faa.gov/sites/faa.gov/files/17_phak_ch15.pdf#page='+s.printedPage.split('-')[1]);}
 assert.equal(c.checked,'2026-09-11');
});


test('Chapters 13–15 distinguish retired weather services, runway clearances and airspace requirements',()=>{
 const chapters=studyDocuments.find(d=>d.id==='phak25c').chapters;
 const section=(n,id)=>chapters[n-1].detailSections.find(s=>s.id===id);
 for(const id of ['tibs','hiwas','tweb','fa','airmet']){const s=section(13,id);assert.ok(s.currentNote);assert.ok(s.references.length);}
 assert.match(section(13,'airmet').currentNote,/2025-01-27/);
 assert.ok(section(13,'metar').points.some(p=>p.includes('AGL')));
 assert.ok(section(13,'age').points.some(p=>p.includes('延遲')));
 for(const id of ['training','scanning','see-avoid']){assert.equal(section(14,id).printedPage,'14-30');assert.ok(section(14,id).currentNote);}
 assert.equal(section(14,'luaw').parent,'atc-instructions');
 assert.ok(section(14,'stop-bar').points.some(p=>p.includes('矛盾')));
 assert.ok(section(15,'class-b').points.some(p=>p.includes('明確')));
 assert.ok(section(15,'class-c').points.some(p=>p.includes('remain outside')));
 assert.ok(section(15,'vfr-minima').points.some(p=>p.includes('1,200 ft AGL')));
 assert.ok(section(15,'vfr-minima').references.some(r=>r.url.includes('chap3_section_1')));
 for(const c of chapters.slice(12,15))for(const s of c.detailSections)for(const r of s.references||[]){assert.ok(['www.faa.gov','www.faasafety.gov','www.weather.gov','aviationweather.gov','www.ecfr.gov','wireless.fcc.gov'].includes(new URL(r.url).hostname));assert.equal(r.checked,'2026-09-11');}
});
