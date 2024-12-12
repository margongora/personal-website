import Card from '../components/Card'
import Project from '../components/Project';

import Neovim from '../assets/neovim.png';
import Website from '../assets/website.png';
import Record from '../assets/record.png';
import Revs from '../assets/revs.png';
import Dice from '../assets/dice.png';
import Capstone from '../assets/capstone.png';

import {
  LuaPlain, TypescriptPlain, ReactOriginal,
  VitejsOriginal, TailwindcssOriginal, PythonOriginal,
  PostgresqlOriginal, MysqlOriginal,
  FlaskOriginal, ArduinoOriginal,
  NextjsOriginal,
  SqlitePlain,
  GoogleOriginal
} from 'devicons-react';

export default function Portfolio() {
  return (
    <>
      <Card>
        <div className='m-4 p-4 grid grid-cols-3 gap-4'>
          <Project
            icon={Neovim}
            title='Neovim Configuration'
            desc='My personal Neovim configuration.'
            link='https://github.com/margongora/dotfiles'
          >
            <LuaPlain size={36} />
          </Project>
          <Project
            icon={Website}
            title='Personal Website'
            desc='My personal portfolio and website.'
            link='https://github.com/margongora/personal-website'
          >
            <TypescriptPlain size={36} />
            <ReactOriginal size={36} />
            <TailwindcssOriginal size={36} />
            <VitejsOriginal size={36} />
          </Project>
          <Project
            icon={Record}
            title='Record Records'
            desc='This serves as my final project for my CSCE 310 course. The code serves as a fully functional records shop simulation, created using the Agile framework. Team members: Ayo Fatoye, Carson Lee, Justin Abraham'
            link='https://github.com/Summer23-CSCE-310-Database-Systems/github-setup-recordrecords'
          >
            <PythonOriginal size={36} />
            <PostgresqlOriginal size={36} />
            <FlaskOriginal size={36} />
          </Project>
          <Project
            icon={Revs}
            title={`Rev's POS System`}
            desc='This is my final project for my CSCE 331 course. This serves as a fully functional simulated point-of-sale (POS) system, which was developed using the Scrum framework. Team members: Adam Teo, Aaron Matthews, Akshay Belle, Chris Avila, Gabe Floreslovo'
            link='https://github.com/csce-315-331-2024a/project-3-full-stack-agile-web-project-3-907-30'
          >
            <TypescriptPlain size={36} />
            <ReactOriginal size={36} />
            <NextjsOriginal size={36} />
            <TailwindcssOriginal size={36} />
            <PostgresqlOriginal size={36} />
          </Project>
          <Project icon={Dice} title='Dice Friend' desc='A Discord dice-rolling bot.'>
            <PythonOriginal size={36} />
            <SqlitePlain size={36} />
            <GoogleOriginal size={36} />
          </Project>
          <Project icon={Capstone} title='Capstone Project: Automatic Sprinkler System'
            desc='This is my capstone project, created with the goal in mind of water conservation. The code interfaces with Arduino and ESP-8266 devices to create an Internet of Things. Team members: Alex Gonce, Jose Rojo, Teresa Rojas, Jiahua Yang, Esom Too-Chiobi'
            link='https://github.com/esomtoochiobi/CSCE-483-CAPSTONE'>
            <PythonOriginal size={36} />
            <FlaskOriginal size={36} />
            <MysqlOriginal size={36} />
            <ArduinoOriginal size={36} />
          </Project>
        </div>
      </Card>
    </>
  )
}