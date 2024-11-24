import React from 'react'
import Nav from '../Component/Nav'
import H1 from '../Elements/H1'
import CategoryCard from '../Component/CategoryCard'
import CoursesCard from '../Component/CoursesCard'
import SECTION from '../Elements/SECTION'
import { Link } from 'react-router-dom'

const CoursesPage = () => {
  return (
    <div>
      <Nav />
      <main className='mt-[5.2406rem] px-10 pt-16'>
        <header className='flex justify-between gap-4 md:items-center flex-col md:flex-row mb-8'>
            <input 
            type="text" 
            className='outline-none border-[1px] border-[#E9EAF0] h-[48px] w-full md:w-[457px] p-2'/>
            <div>
                <span className='text-[14px] text-[#4E5566] mr-4'>Sort by:</span>
                <select name="" id="" className='outline-none border-[1px] border-[#E9EAF0] h-[48px] w-[200px] p-2'>
                    <option value="">Trending</option>
                    <option value="">Educating</option>
                </select>
            </div>
        </header>
        <SECTION>
            <H1 otherStyle={"w-max m-auto mb-6"}>Top Category</H1>
            <div className="flex gap-[2.8125rem] flex-wrap justify-center items-center">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </SECTION>
        <SECTION>
            <H1>Featured courses</H1>
            <div className="w-full flex flex-col gap-[2.625rem]">
            <div className="btns flex justify-around">
                <button className="hover:font-bold">All</button>
                <button className="hover:font-bold">Design</button>
                <button className="hover:font-bold">Development</button>
                <button className="hover:font-bold">Data Science</button>
                <button className="hover:font-bold">Development</button>
                <button className="hover:font-bold">Personal development</button>
            </div>
            <div className="courses grid gap-[6.25rem] lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-between w-full ">
                <CoursesCard />
                <CoursesCard />
                <CoursesCard />
                <CoursesCard />
                <CoursesCard />
                <CoursesCard />
            </div>
            </div>
        </SECTION>
        <section>
            <div className='flex items-center justify-between'>
                <H1>Most viewed courses</H1>
                <Link className='text-[20px]'>See all</Link>
            </div>
            <div className='mt-6 border-[1px] border-[#D9D9D9] p-10 bg-[#FFFDFD]'>
                <div className='flex items-center justify-between gap-14'>
                    <div className='w-3/6'>
                        <video
                            className="w-full shadow-lg m-auto h-[30rem] rounded-lg"
                            controls
                        >
                            <source src="..Videos/video1.mp4" type="video/mp4" />
                        </video>
                        <div className='flex items-center justify-between mt-6'>
                            <span className='flex items-center gap-1'><p className='bg-white border-[1px] border-[#F1F1F3] rounded-md px-2 p-1'>6 Weeks</p><p className='bg-white border-[1px] border-[#F1F1F3] rounded-md px-2 p-1'>Intermidiate</p>
                            </span>
                            <p>5k views</p>
                        </div>
                    </div>
                    <div className='w-3/6 flex flex-col gap-4'>
                        <H1>UI/UX Design</H1>
                        <p>Become a master of UI design and UX enhancement by learning the essential 
                            skills of design principles, wireframing, prototypng,
                            and usability testing  to create seamless and engaging interactions
                        </p>
                        <Link 
                        className='bg-[#FCFCFD] rounded-lg p-2 w-[121px]'
                        to='/course_details'>View Course</Link>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  )
}

export default CoursesPage
