'use client'
import Link from 'next/link'
import data from './data.json'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>Here is timestamps from local file</h1>
			<ul className='flex w-screen min-h-screen flex-row flex-wrap items-center justify-center p-2 gap-1'>
				{data.map((item, index) => (
					<li className='p-2 gap-1' key={index + item}>
						<p>{item}</p>
					</li>
				))}
			</ul>
		</main>
	)
}
