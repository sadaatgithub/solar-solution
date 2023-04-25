import React from 'react'
import Container from './Container'

const Quote = () => {
  return (
    <Container className="flex flex-col md:flex-row gap-20 min-h-screen bg-[url('../public/solarimg.jpg')] bg-cover bg-no-repeat relative after:content-[''] after:absolute after:bg-black/80  after:inset-0">
        
        <div className="flex flex-col z-10 text-white gap-6 md:w-1/2">
            <h2 className="text-4xl font-bold">Request A Free Quote</h2>
            <p className="text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="flex flex-col gap-4 text-gray-400">
                <p>Email : solar-solution@email.com</p>
                <p>Mobile : 9898653265</p>
                <p>Address: 123 Sample St, Sydney NSW 2000 AU</p>
            </div>
        </div>
            <form action="" className="z-10 md:w-1/2 text-white flex flex-col gap-6">
                <div class="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="border py-2"/>
                </div>
                <div class="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="border py-2"/>
                </div>
                <div class="flex flex-col gap-2">
                    <label htmlFor="name">Message</label>
                    <textarea name="" id="" cols="30" rows="6" placeholder="Type your message..." className="p-3"></textarea>
                </div>
                <div class="flex items-center gap-2">
                    <input type="checkbox" name="email" className="border py-2"/>
                    <label htmlFor="email">I accept <a href="#">Terms</a></label>
                </div>
                <button className="px-6 py-3 self-start border border-orange-500 bg-orange-500">Get A Free Quote</button>
            </form>
    </Container>
  )
}

export default Quote