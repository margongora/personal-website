import Card from '../components/Card'
import Project from '../components/Project';

import Neovim from '../assets/neovim.png';
import Website from '../assets/website.png';
import Record from '../assets/record.png';
import Revs from '../assets/revs.png';
import Dice from '../assets/dice.png';

import {
  LuaPlain, TypescriptPlain, ReactOriginal,
  VitejsOriginal, TailwindcssOriginal, PythonOriginal,
  PostgresqlOriginal,
  FlaskOriginal,
  NextjsOriginal,
  SqlitePlain,
  GoogleOriginal
} from 'devicons-react';

export default function Portfolio() {
  return (
    <>
      <Card>
        <div className='m-4 p-4 grid grid-cols-3 gap-4'>
          <Project icon={Neovim} title='Neovim Configuration' desc='My personal Neovim configuration.'>
            <LuaPlain size={36} />
          </Project>
          <Project icon={Website} title='Personal Website' desc='My personal portfolio and website.'>
            <TypescriptPlain size={36} />
            <ReactOriginal size={36} />
            <TailwindcssOriginal size={36} />
            <VitejsOriginal size={36} />
          </Project>
          <Project icon={Record} title='Record Records'
            desc='CSCE 310 Group Project: Ayo Fatoye, Carson Lee, Justin Abraham'
          >
            <PythonOriginal size={36} />
            <PostgresqlOriginal size={36} />
            <FlaskOriginal size={36} />
          </Project>
          <Project icon={Revs} title={`Rev's POS System`}
            desc='CSCE 331 Final Project: Adam Teo, Aaron Matthews, Akshay Belle, Chris Avila, Gabe Floreslovo'
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
        </div>
      </Card>
    </>
  )
}