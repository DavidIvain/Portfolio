import { PropsWithChildren } from "react";
import { Card } from "../Card/Card";
import { CardTitle } from "../CardTitle/CardTitle";
import "./home-content.scss";

export const HOME_CONTENT_ID = "home-content";
const translationData = {
    description: [
        "M2 IAGL, Université de Lille",
        "M2 IAGL, University of Lille"
    ],
    age: ["ans", "years old"],
    aboutTitle: ["À Propos", "About"],
    introductionContent: [
        <><p>Étudiant en 2ème année de master informatique à l'université de Lille,<br />
            Je suis à la recherche d'un stage de fin d'études en tant que développeur, de préférence, mais non-exclusivement, dans le domaine du web ou mobile.</p>
            <p>Ma formation à l'université de Lille m'a permis d'obtenir une certaine expérience avec Java, C et l'outil GitLab, ainsi qu'avec Flutter grâce à mes projets de cette année pour l'Inria.
                Mes projets personnels et mes stages m'ont également permis de me familiariser avec JavaScript, TypeScript et leurs nombreux frameworks.</p>
            <p>Curieux, j'aime expérimenter avec de nouveaux langages et outils.</p></>,
        <><p>Master's degree student at the University of Lille,<br />
            I'm looking for a internship as a developer, preferably but not exclusively in Web or mobile development.</p>
            <p>My education at the University of Lille gave me some experience with Java, C and GitLab, as well as Flutter thanks to the projects I took part in this year for Inria.
                Also, my personal projects and previous internships made me really familiar with JavaScript, Typescript and their numerous frameworks.</p>
            <p>Being inquiring, I love to play and experiment with new languages and tools.</p></>
    ],
    coInterestTitle: ["Centres d'Intérêt", "Centers of Interest"],
    guitar: ["Guitare", "Guitar"],
    webDev: ["Développement Web", "Web Development"],
    skills: ["Compétences", "Skills"],
    pLang: ["Langages P.", "P. Languages"],
    pManagement: ["Gestion de Projet", "Project Management"],
    languages: ["Langues", "Languages"],
    french: ["Français", "French"],
    english: ["Anglais", "English"],
    education: ["Études", "Education"],
    master: ["Master", "Master's degree"],
    universityOL: ["Université de Lille", "University of Lille"],
    today: ["Aujourd'hui", "Today"],
    licence: ["Licence 3 Informatique", "Bachelor's degree in CS"],
    bts: ["BTS SIO option SLAM", "Two-year Technical Degree (BTS SIO option SLAM)"],
    experiences: ["Expériences", "Experiences"],
    intern: ["Développeur Stagiaire", "Software Developer Intern"],
    weeks: ["semaines", "weeks"],
    expAngular: ["Travail sur une application pour la gestion de transcripts en Angular 8.", "Worked on an Angular 8 application for transcript manipulation."],
    expIntra2: ["Refonte complète de l’application Gestion de Projets de l’intranet. Utilisation de PHP, HTML, CSS et JavaScript.",
        "Complete rework of the intranet's project management application. Used PHP, HTML, CSS and JavaScript."],
    expIntra1: ["Corrections de bugs sur l’intranet de l’entreprise et ajout de nouvelles fonctionnalités.",
        "Fixed bugs on the company's intranet and added new features."],
    plusUrbilogTitle: ["Compétences Acquises :", "Learned skills :"],
    plusUrbilogContent: [
        <><ul><li>Fonctionnement en entreprise</li>
            <li>Travail collaboratif</li>
            <li>Normes et outils d’accessibilité</li>
            <li>Pratique des technologies du web (HTML, CSS, PHP, JavaScript, Node.js et Angular)</li></ul></>,
        <><ul><li>Work in a professional setting</li>
            <li>Collaboration on projects</li>
            <li>Accessibility guidelines and tools</li>
            <li>Web technologies (HTML, CSS, PHP, JavaScript, Node.js and Angular)</li></ul></>
    ]
};

const ContactInfo = (props: PropsWithChildren<{ src: string, alt: string, isLink: boolean, href?: string }>) => <div>
    <img src={props.src} alt={props.alt} />
    {props.isLink ? <a target="_blank" rel="noreferrer" href={props.href}>{props.children}</a> : <span>{props.children}</span>}
</div>

const SectionTitle = (props: PropsWithChildren<{ title: string, href: string, backgroundColor?: string, background?: string }>) => <CardTitle backgroundColor={props.backgroundColor} background={props.background}>
    <svg width="30" height="30" style={{ lineHeight: "100%" }}><title>{props.title}</title><use href={props.href} height="30" width="30"></use></svg>
    <h3 className="section-title" style={{ marginInlineStart: "16px" }}>{props.children}</h3>
</CardTitle>

const SectionContent = (props: PropsWithChildren<{ className?: string }>) => <div className={props.className !== undefined ? "section-content " + props.className : "section-content"}>
    {props.children}
</div>

const SkillCategory = (props: PropsWithChildren<{ title: string, backgroundColor: string, href: string, alt: string }>) => <article className="skill-category">
    <CardTitle justifyContent="center" backgroundColor={props.backgroundColor}>
        <svg width="24" height="24"><title>{props.alt}</title><use href={props.href}></use></svg>
        <h4 className="skill-category-title">{props.title}</h4>
    </CardTitle>
    <div className="skill-category-content"><ul>{props.children}</ul></div>
</article>


export type HomeContentProps = {
    locale: number;
};


export const HomeContent = (props: HomeContentProps) => {
    return <main id={HOME_CONTENT_ID}>
        <div id="links-card">
            <Card>
                <CardTitle backgroundColor="#80a9f1" flex={false}>
                    <h2>CV - David Ivain</h2>
                    <span className="subsection-title">{translationData.description[props.locale]}</span>
                </CardTitle>
                <address id="links">
                    <ContactInfo src="/assets/gift.svg" alt="Age icon" isLink={false}>{Math.floor((Date.now() - new Date(1996, 8, 24).getTime()) / (1000 * 3600 * 24 * 365))} {translationData.age[props.locale]}</ContactInfo>
                    <ContactInfo src="/assets/map-pin.svg" alt="Place icon" isLink={false}>59000 Lille, France</ContactInfo>
                    <ContactInfo src="/assets/mail.svg" alt="Mail icon" href="mailto:d.ivain@outlook.fr" isLink>d.ivain@outlook.fr</ContactInfo>
                    <ContactInfo src="/assets/phone.svg" alt="Phone icon" href="tel:+33624545884" isLink>+33 6 24 54 58 84</ContactInfo>
                    <ContactInfo src="/assets/github.svg" alt="GitHub icon" href="https://github.com/DavidIvain" isLink >github.com/DavidIvain</ContactInfo>
                    <ContactInfo src="/assets/linkedin.svg" alt="LinkedIn icon" href="https://www.linkedin.com/in/david-ivain" isLink >linkedin.com/in/david-ivain</ContactInfo>
                </address>
            </Card>
        </div>
        <section>
            <Card id="main-card">
                <div>
                    <section>
                        <SectionTitle backgroundColor="#e15259" title="User icon" href="/assets/user.svg#user">{translationData.aboutTitle[props.locale]}</SectionTitle>
                        <SectionContent className="justify">
                            <section>
                                <h4 className="subsection-title">Introduction</h4>
                                {translationData.introductionContent[props.locale]}
                            </section>
                            <section>
                                <h4 className="subsection-title">{translationData.coInterestTitle[props.locale]}</h4>
                                <ul>
                                    <li>{translationData.guitar[props.locale]}</li>
                                    <li>Animes</li>
                                    <li>{translationData.webDev[props.locale]}</li>
                                </ul>
                            </section>
                        </SectionContent>
                    </section>
                    <section>
                        <SectionTitle background="linear-gradient(to right, skyblue, plum, lightcoral)" title="Check-Circle Icon" href="/assets/check-circle.svg#check-circle">{translationData.skills[props.locale]}</SectionTitle>
                        <div className="skills-content">
                            <SkillCategory backgroundColor="#67d4ef" alt="Compass Icon" href="/assets/compass.svg#compass" title="Web">
                                <li className="main-skill">React</li>
                                <li className="main-skill">Vue</li>
                                <li>Spring</li>
                                <li>TypeScript</li>
                                <li>SASS</li>
                            </SkillCategory>
                            <SkillCategory backgroundColor="#80d4b6" alt="Smartphone Icon" href="/assets/smartphone.svg#smartphone" title="Mobile">
                                <li className="main-skill">Flutter</li>
                                <li className="main-skill">React Native</li>
                            </SkillCategory>
                            <SkillCategory backgroundColor="#ab99d7" alt="Coffee Icon" href="/assets/coffee.svg#coffee" title={translationData.pLang[props.locale]}>
                                <li className="main-skill">Java</li>
                                <li className="main-skill">Python</li>
                                <li className="main-skill">C</li>
                                <li>Kotlin</li>
                                <li>C++</li>
                            </SkillCategory>
                            <SkillCategory backgroundColor="#fdb371" alt="Git-Branch Icon" href="/assets/git-branch.svg#git-branch" title={translationData.pManagement[props.locale]}>
                                <li className="main-skill">Git</li>
                                <li className="main-skill">GitHub, GitLab</li>
                                <li>Agile / Scrum</li>
                                <li>Trello</li>
                            </SkillCategory>
                            <SkillCategory backgroundColor="#94d676" alt="Message Icon" href="/assets/message-circle.svg#message-circle" title={translationData.languages[props.locale]}>
                                <li>{translationData.french[props.locale]}</li>
                                <li>{translationData.english[props.locale]} TOEIC 965</li>
                            </SkillCategory>
                        </div>
                    </section>
                </div>
                <div>
                    <section>
                        <SectionTitle backgroundColor="#60b58d" title="Book Icon" href="/assets/book.svg#book">{translationData.education[props.locale]}</SectionTitle>
                        <SectionContent>
                            <article>
                                <h4 className="subsection-title mbe-0">{translationData.master[props.locale]}: IAGL (Infrastructures Applicatives et Génie Logiciel)</h4>
                                <p className="education-school">{translationData.universityOL[props.locale]}, Villeneuve-d'Ascq</p>
                                <p className="mbs-0"><time dateTime="2019">2019</time> - <time dateTime="2021">{translationData.today[props.locale]}</time></p>
                            </article>
                            <article>
                                <h4 className="subsection-title mbe-0">{translationData.licence[props.locale]}</h4>
                                <p className="education-school">{translationData.universityOL[props.locale]}, Villeneuve-d'Ascq</p>
                                <p className="mbs-0"><time dateTime="2018">2018</time> - <time dateTime="2019">2019</time></p>
                            </article>
                            <article>
                                <h4 className="subsection-title mbe-0">{translationData.bts[props.locale]}</h4>
                                <p className="education-school">Lycée privé Saint Rémi, Roubaix</p>
                                <p className="mbs-0"><time dateTime="2016">2016</time> - <time dateTime="2018">2018</time></p>
                            </article>
                        </SectionContent>
                    </section>
                    <section>
                        <SectionTitle backgroundColor="#c39780" title="Briefcase Icon" href="/assets/briefcase.svg#briefcase">{translationData.experiences[props.locale]}</SectionTitle>
                        <SectionContent>
                            <article>
                                <h4 className="subsection-title">{translationData.intern[props.locale]}, Urbilog ; Villeneuve-d'Ascq</h4>
                                <section>
                                    <h5 className="mbe-0"><time dateTime="P12W">12 {translationData.weeks[props.locale]}</time>, <time dateTime="2019">2019</time></h5>
                                    <p className="mbs-0">{translationData.expAngular[props.locale]}</p>
                                </section>
                                <section>
                                    <h5 className="mbe-0"><time dateTime="P8W">8 {translationData.weeks[props.locale]}</time>, <time dateTime="2018">2018</time></h5>
                                    <p className="mbs-0">{translationData.expIntra2[props.locale]}</p>
                                </section>
                                <section>
                                    <h5 className="mbe-0"><time dateTime="P5W">5 {translationData.weeks[props.locale]}</time>, <time dateTime="2018">2017</time></h5>
                                    <p className="mbs-0">{translationData.expIntra1[props.locale]}</p>
                                </section>
                                <section>
                                    <h5>{translationData.plusUrbilogTitle[props.locale]}</h5>
                                    {translationData.plusUrbilogContent[props.locale]}
                                </section>
                            </article>
                        </SectionContent>
                    </section>
                </div>
            </Card>
        </section>
    </main>
}