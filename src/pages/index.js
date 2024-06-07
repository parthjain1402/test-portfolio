import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { ProjectsEntry, EducationEntry, PublicationEntry, ConferenceEntry } from '../components/curriculumEntry';
import { Link } from 'gatsby';
import * as icons from 'react-icons/ri';
import scrollTo from 'gatsby-plugin-smoothscroll';

const IndexPage = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row place-items-center lg:place-items-start space-y-12 lg:space-x-12">
        {/* Photo and social links */}
        <div className="flex flex-col lg:px-6 lg:sticky top-24 place-items-center space-y-6 lg:mb-24">
          {/* Photo */}
          <StaticImage
            src="../images/avatar.png"
            alt="Me"
            className="rounded-full h-64 w-64 object-cover mt-4"
          />
          {/* Social links */}
          <div className='flex flex-row mx-auto place-items-center space-x-8 overflow-visible'>
            <Link href="https://www.linkedin.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="LinkedIn">
              <icons.RiLinkedinBoxFill size={32}></icons.RiLinkedinBoxFill>
            </Link>
            <Link href="https://github.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Github">
              <icons.RiGithubFill size={32}></icons.RiGithubFill>
            </Link>
            <Link href="https://www.twitter.com/" className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Twitter">
              <icons.RiTwitterFill size={32}></icons.RiTwitterFill>
            </Link>
            <Link href="https://drive.google.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='CV'>
              <i className="ai ai-cv ai-size-32"></i>
            </Link>
          </div>

          {/* Quick links */}
          <div className='hidden lg:flex flex-col w-1/3 items-start'>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#education")} className='peer group-hover:underline'>Education</button>
            </div>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#projects")} className='peer group-hover:underline'>Projects</button>
            </div>
            <div className='flex flex-row items-center group'>
                <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
                <button onClick={() => scrollTo("#publications")} className='peer hover:underline'>Publications</button>
            </div>
            <div className='flex flex-row items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#conference")} className='peer hover:underline'>Conferences</button>
            </div>
            <div className='flex flex-row items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#contact")} className='peer hover:underline'>Contact</button>
            </div>
          </div>
        </div>

        {/* Text and content */}
        <div className="container flex flex-col">
          <h1  className="text-3xl font-bold mb-4">Hi, I'm Purtee Kohli!</h1>

          <p className="mb-4">
          Moving form Polaris software labs ,Noida after 4 yrs from development to teaching.
          It was a a great shift with a very enriching experience , Try to teach, mentor and moulds the young minds.
           
          </p>
          <p className="mb-4">
          She received her M.Phil degree in Computer Science and is planning to pursue a doctorate in the near future. 
          Her research interests are Software Engineering,Digital Image Processing and Multimedia.
          She also holds a Masters degree in Computer Application from Maharishi Dayanand University, Rothak in addition to 
          abachelor’s degree in Physics from Delhi University. Purtee originally started her career in the field of corporate IT 
          working with Polaris Software labs,Noida forclients like ICICI India, Bank Artha Graya , Indonesia.  
          </p>
          
          <p className="mb-4">
          After proving herself as an accomplished software engineer for 4 years Purtee decided to pursue her career in teaching due 
          to her deep passion for knowledge. Purtee teaches a variety of courses, including Data Structures, UNIX,ICP,OOSP, 
          Software Engineering, Multimedia and is committed to establish herself as a reputed professional in the field of education. 
          </p>

          {/* Timeline */}
          
          <section>
            <div id="education" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Education</h1>
            <EducationEntry
              date={'2013'}
              university={'IIT Dehli'}
              degree={'Project Management Course'}
            />
            <EducationEntry
              date={'2008'}
              university={'Alappya University'}
              degree={'Master of Philosophy (Computer Science)'}
            />
            <EducationEntry
              date={'2001'}
              university={'Rothak University'}
              degree={'Master of Computer Applications'}
            />
            <EducationEntry
              date={''}
              university={'Delhi University'}
              degree={'Bachelor of Science Honours (Physics)'}
            />
          </section>
          
          <section>
            <div id="projects" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Projects</h1>
            <ProjectsEntry
              name={'Collect Now'}
              description={'This is software to be implemented by the ICICI bank for its collection purpose. Once the loan account becomes delinquent, the amount retrieval becomes the task of the collectors they can be either field or telly collector. This software aids in automating the task allocation and status updation of the accounts.'}
            />
            <ProjectsEntry
              name={'Alert Now'}
              description={'A system developed for banks to send Alerts through e-mail /SMS to the account holders about their bill payments , credit , debit transaction in their A/C'}            />
          </section>

          <section>
            <div id="publications" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Publications</h1>
            <PublicationEntry
              name={''}
              title={'IOSR Journal of Computer Engineering'}
              authors={' '}
              journal={' '}
            />
            
          </section>

          <section>
            <div id="conference" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Conferences Attended</h1>
            <ConferenceEntry
              date={'2017'}
              title={'Cost Estimation Model'}
              authors={'Purtee Kohli, D Soni'}
              journal={'Cost Estimation Model for Web Applications using Agile Software Development Methodology, Pertanika Journal of Science & Technology'}
            />
            <ConferenceEntry
              date={'May 2016'}
              title={'TEAM MEMBER SELECTION IN AGILE'}
              authors={'Purtee Kohli, Dr. Devpriya Soni, Avnish Singh Jat'}
              journal={'IJSTM, international Journal of Science Technology and Management, Vol 5, ISSN234-1537'}
            />
            <ConferenceEntry
              date={'September 2010'}
              title={'A Risk Assessment Tool'}
              authors={'Purtee Kohli, Chechani Niranjan'}
              journal={ 'Fifth National IT Conference – IT Initiatives for Building Creative Organizations Indore'}
            />
            <ConferenceEntry
              date={'Feburary 2008'}
              title={'Road Map on Requirement volatility'}
              authors={'Purtee Kohli, Mahnohar Lal'}
              journal={'National Conference Advances in Communication, Computers,Control & Knowledge Management  ACCC-KM-08 , Bhadurgarh'}
            />
          </section>

          <section id="contact">
            <div id="contact" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Contact</h1>
            <p>
              If you are interested in discussing, please feel free to reach out ! You can contact me at the following email adress: 
            </p>    
            <p>
              purtijk@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage