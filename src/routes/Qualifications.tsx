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
				<div className='flex flex-col font-semibold items-center text-2xl text-black rounded-2xl basis-1/2 bg-white m-4 p-4'>
					<span className='text-3xl text-center font-bold underline mb-4'>
						Relevant Coursework and Skills
					</span>
					<ul className='flex flex-col justify-between gap-4'>
						<li>CSCE 331: Principles of Software Engineering: Web Development</li>
						<li>CSCE 314: Programming Languages: Haskell, Java</li>
						<li>ECEN 325: Electronics</li>
						<li>ECEN 449: Digital Microprocessor Design: Verilog</li>
						<li>ECEN 350: Computer Architecture and Design: ARMv8, Verilog</li>
						<li>CSCE 310: Database Systems: PostgreSQL, Python, Flask</li>
						<li>CSCE 313: Intro to Computer Systems: C++, Networking, Linux</li>
						<li>ECEN 248: Intro to Digital System Design</li>
						<li>CSCE 221: Data Structures and Algorithm: C++, Data Structures, Algorithms</li>
						<li>CSCE 222: Discrete Structures for Computing</li>
						<li>CSCE 121: Intro to Program Design and Concepts: C++</li>
					</ul>
				</div>
			</div>
		</Card>
	</>

export default Qualifications;
