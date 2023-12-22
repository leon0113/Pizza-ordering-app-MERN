import Image from 'next/image'
import Right from '../icons/Right'

export default function Hero() {
    return (
        <section className='grid grid-cols-2 mt-32'>
            <div className='flex flex-col justify-center w-96 space-y-8'>
                <h1 className='text-4xl font-semibold leading-normal'>Everything is better with a <span className='text-primary'>Slice!</span></h1>
                <p className='my-4 text-gray-500'>Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p>
                <div className='flex gap-6'>
                    <button className='flex gap-2 bg-primary text-white px-6 py-4 rounded-lg hover:bg-orange-400'>Order Now <Right /></button>
                    <button className='flex gap-2  px-6 py-4 rounded-lg hover:bg-primary hover:text-white'>Learn More <Right /></button>
                </div>
            </div>
            <Image src={"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='PIZZA' height={600} width={600} className='rounded-3xl' />
        </section>
    )
}