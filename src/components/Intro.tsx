import * as Headshot from '../assets/headshot.png';

const Intro = () => {
  return (
    <div className='m-4 p-4 flex flex-row gap-[5%]'>
      <div className='basis-3/4 flex flex-col p-8 bg-white rounded-2xl content-center text-center text-black gap-1'>
        <span className='text-2xl font-semibold underline mb-2'>About Me!</span>
        <p className='text-lg'>
          Howdy! I am currently a senior Computer Engineering student, a Teaching Assistant for CSCE 121, and a Peer Teacher for ENGR 102 and 217 at Texas A&M University.
        </p>
        <p className='text-lg'>
          I've garnered a great deal of love and respect for the field I am trying to enter, from learning the intricacies of digital design, circuits, and computer architecture to system design, data structures, and databases.
          I mainly have experience coding with C, C++, Python, and Java/Typescript. I've developed applications in Typescript with React, and in Python with Flask. I've also worked with the hardware description language Verilog and the LegV8 subset of the ARMv8 architecture.
          I’m very quick to learn new things and new technologies, both as required of me and on my own time.
        </p>
        <p className='text-lg'>
          My time as a Teaching Assistant and Peer Teacher has only fostered my love of learning, and ensured that I want to actively learn new things, not only for my career, but for the sake of learning and sharing that knowledge with others. I hope to pass this onto others, and give back to people the same way that I’ve been given my opportunities and passions.
          I’ll be using this website as a way for prospective employers to get to know about me some more. My qualifications and resume will be hosted here, as well as any former and current projects that I’m working on, whether they be personal, or school related.
        </p>
      </div>
      <div className='basis-1/4 content-center'>
        <img
          className='rounded-full border-white border-solid border-4'
          src={Headshot.default}
          height={350}
          width={350}
        />
      </div>
    </div>
  )
}

export default Intro;