import Card from '../components/Card'
import Resume from '../assets/resume.png';

const Qualifications = () =>
	<>
		<Card>
			<div className='flex flex-row m-4 p-4 gap-4'>
				<img
					className='basis-1/2 m-4 p-4 bg-white rounded-2xl'
					width={500}
					height={50}
					src={Resume}></img>
				<div className='flex flex-col justify-between font-semibold items-center text-2xl text-black rounded-2xl basis-1/2 bg-white m-4 p-4'>
					<span className='text-3xl text-center font-bold underline'>
						Relevant Coursework
					</span>
					<p>CSCE 331: Principles of Software Engineering</p>
					<p>CSCE 314: Programming Languages</p>
					<p>ECEN 325: Electronics</p>
					<p>ECEN 449: Digital Microprocessor Design</p>
					<p>ECEN 350: Computer Architecture and Design</p>
					<p>CSCE 310: Database Systems</p>
					<p>CSCE 313: Intro to Computer Systems</p>
					<p>ECEN 248: Intro to Digital System Design</p>
					<p>CSCE 221: Data Structures and Algorithm</p>
					<p>CSCE 222: Discrete Structures for Computing</p>
					<p>CSCE 121: Intro to Program Design and Concepts</p>
				</div>
			</div>
		</Card>
	</>

export default Qualifications;
