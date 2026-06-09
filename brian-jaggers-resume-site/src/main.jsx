import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BarChart3, Database, Brain, LineChart, ShieldCheck, Mail, Phone, Linkedin, ExternalLink, ChevronRight, Download, Sparkles, BriefcaseBusiness, GraduationCap, Award } from 'lucide-react';
import './styles.css';

const skills = ['SQL','Python','Pandas','NumPy','Tableau','Power BI','Excel','Power Query','Forecasting','Trend Analysis','Dashboard Development','Oracle','SAP','Healthcare Analytics','Claims Analysis','Prompt Engineering','Microsoft Copilot','Process Automation'];

const experience = [
  { role:'Order Entry Analyst — Data & Reporting Focus', company:'PharMerica', dates:'Aug 2024 – Present', points:['Designs Excel analytical reports for unpaid claims, denial rates, and pharmacy KPIs.','Optimizes SQL queries to surface denied-claim trends and root causes.','Uses Microsoft Copilot and prompt engineering to reduce repetitive reporting effort by an estimated 30%.','Maintains 99%+ data accuracy through quality controls and cross-validation routines.'] },
  { role:'Pharmacy Data Analyst Technician', company:'CVS Health', dates:'Aug 2022 – Present', points:['Developed controlled medication tracking dashboards and compliance reports.','Analyzed dispensing trends to identify workflow bottlenecks and optimization opportunities.','Standardized reporting procedures to improve consistency across teams.'] },
  { role:'Pharmacy Analyst & Lead', company:'Chewy Pharmacy', dates:'Oct 2018 – Aug 2022', points:['Built forecasting models and operational reporting in Excel and Oracle.','Created Tableau and Power BI dashboards for real-time management KPIs.','Reduced ad hoc requests by consolidating insights into self-service reporting views.'] },
  { role:'Help Desk Analyst', company:'CompuCom', dates:'May 2016 – Oct 2018', points:['Maintained 100% QA compliance through detailed monitoring and incident tracking.','Resolved Windows and macOS technical issues and documented reusable solutions.','Built foundational ERP data knowledge across SAP and Oracle environments.'] },
  { role:'Religious Program Specialist', company:'United States Navy', dates:'Feb 2011 – Apr 2015', points:['Maintained operational databases supporting scheduling and resource coordination for 800+ personnel.','Produced activity reports used for command-level operational planning.'] }
];

const projects = [
  { title:'Healthcare Claims Denial Dashboard', type:'Power BI / SQL', icon:<ShieldCheck/>, description:'A self-service analytics dashboard that tracks denied claims, denial reasons, aging buckets, payer trends, and revenue leakage opportunities.', impact:'Helps leadership prioritize high-value denial recovery work.' },
  { title:'Pharmacy Operations KPI Command Center', type:'Tableau / Excel / Power Query', icon:<BarChart3/>, description:'Interactive KPI suite for prescription volume, fulfillment cycle time, backlog, accuracy, staffing trends, and workflow bottlenecks.', impact:'Turns daily pharmacy operations into clear executive-ready insights.' },
  { title:'Inventory Forecasting Model', type:'Python / Excel', icon:<LineChart/>, description:'Forecasting workflow that predicts medication demand using historical dispensing patterns, seasonality, and trend analysis.', impact:'Supports smarter staffing and inventory planning decisions.' },
  { title:'AI-Assisted Reporting Automation', type:'Microsoft Copilot / Prompt Engineering', icon:<Brain/>, description:'Reusable prompt library and workflow for summarizing data issues, drafting report narratives, and accelerating recurring analysis.', impact:'Reduces manual reporting time while improving consistency.' },
  { title:'SQL Data Quality Monitor', type:'SQL / BI', icon:<Database/>, description:'Automated quality checks for missing values, duplicates, unexpected outliers, and mismatched pharmacy transaction records.', impact:'Improves trust in dashboards and downstream reporting.' },
  { title:'Executive Business Review Pack', type:'PowerPoint / BI Storytelling', icon:<BriefcaseBusiness/>, description:'Monthly business review framework that converts raw KPI extracts into trends, exceptions, insights, and recommended actions.', impact:'Bridges technical analysis and leadership decision-making.' }
];

function App(){
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress,{ stiffness:100, damping:30 });
  const [spot, setSpot] = useState({x:50,y:50});
  useEffect(()=>{const h=e=>setSpot({x:e.clientX,y:e.clientY}); window.addEventListener('mousemove',h); return()=>window.removeEventListener('mousemove',h)},[]);
  return <main>
    <motion.div className="progress" style={{scaleX}} />
    <div className="cursor-glow" style={{left:spot.x,top:spot.y}} />
    <nav><a className="brand" href="#top">BJ<span>.</span></a><div><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div></nav>
    <section id="top" className="hero">
      <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="hero-copy">
        <p className="eyebrow"><Sparkles size={16}/> Data Analyst • BI • Healthcare Analytics</p>
        <h1>Brian Jaggers turns healthcare and pharmacy data into decisions leaders can act on.</h1>
        <p className="subtitle">Results-driven analyst with 8+ years of experience in SQL, Python, Tableau, Power BI, Excel, healthcare claims, pharmacy operations, forecasting, dashboarding, and AI-assisted analytics.</p>
        <div className="cta"><a className="button primary" href="mailto:brianjaggers.bj@gmail.com"><Mail size={18}/> Contact Brian</a><a className="button" href="#projects"><ChevronRight size={18}/> View Projects</a></div>
        <div className="contact-strip"><span><Phone size={15}/> (502) 741-3976</span><span><Mail size={15}/> brianjaggers.bj@gmail.com</span><span><Linkedin size={15}/> linkedin.com/in/brianjaggers</span></div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.2}} className="orb-card">
        <div className="orb"></div><h2>Analytics Profile</h2><p>Healthcare domain expertise + modern BI + AI-augmented workflow optimization.</p>
        <div className="metric"><strong>8+</strong><span>Years progressive analytics experience</span></div><div className="metric"><strong>30%</strong><span>Estimated manual reporting reduction</span></div><div className="metric"><strong>99%+</strong><span>Data accuracy focus</span></div>
      </motion.div>
    </section>
    <section className="marquee"><div>{skills.concat(skills).map((s,i)=><span key={i}>{s}</span>)}</div></section>
    <section className="section"><div className="section-head"><p className="eyebrow">Core Value</p><h2>Business intelligence built for action.</h2></div><div className="value-grid">{['Claims & denied revenue analysis','Executive stakeholder reporting','Forecasting and trend analysis','AI-assisted workflow optimization'].map((v,i)=><motion.article className="glass" key={v} whileHover={{y:-8,rotateX:3}}><span>0{i+1}</span><h3>{v}</h3><p>Clear visuals, reliable data, and practical recommendations that improve decisions.</p></motion.article>)}</div></section>
    <section id="projects" className="section"><div className="section-head"><p className="eyebrow">Portfolio Projects</p><h2>Generic data analyst projects recruiters can understand quickly.</h2></div><div className="project-grid">{projects.map((p,i)=><motion.article className="project" key={p.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><div className="project-icon">{p.icon}</div><p className="type">{p.type}</p><h3>{p.title}</h3><p>{p.description}</p><b>{p.impact}</b><a href="#contact">Discuss project <ExternalLink size={14}/></a></motion.article>)}</div></section>
    <section id="experience" className="section timeline-section"><div className="section-head"><p className="eyebrow">Experience</p><h2>Progressive analytics, pharmacy, healthcare, and enterprise systems background.</h2></div><div className="timeline">{experience.map(job=><article className="timeline-item" key={job.role}><div className="dot"></div><div><p className="dates">{job.dates}</p><h3>{job.role}</h3><h4>{job.company}</h4><ul>{job.points.map(pt=><li key={pt}>{pt}</li>)}</ul></div></article>)}</div></section>
    <section className="section split"><div className="panel"><GraduationCap/><h2>Education</h2><p><b>B.S., Information Technology Management</b><br/>McKendree University | 2007</p><p><b>A.A.S., Information Technology</b><br/>Jefferson Community College | 2007</p></div><div className="panel"><Award/><h2>Certifications</h2><p>IBM i2 Systems Analyst Notebook Certification</p><p>Toshiba Laptop Repair Certification</p><p className="small">Key strengths: healthcare/pharmacy domain expertise, AI-augmented workflow optimization, cross-functional communication.</p></div></section>
    <section id="contact" className="contact"><h2>Let’s turn data into measurable business results.</h2><p>Open to data analyst, business intelligence, healthcare analytics, and pharmacy operations analytics opportunities.</p><div className="cta"><a className="button primary" href="mailto:brianjaggers.bj@gmail.com"><Mail size={18}/> Email Brian</a><a className="button" href="https://linkedin.com/in/brianjaggers" target="_blank"><Linkedin size={18}/> LinkedIn</a></div></section>
    <footer>© {new Date().getFullYear()} Brian Jaggers. Built for recruiters, managers, and modern analytics teams.</footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App/>);
