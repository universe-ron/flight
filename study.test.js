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
