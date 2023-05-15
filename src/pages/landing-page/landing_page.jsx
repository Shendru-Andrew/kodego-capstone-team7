import React, {useRef,useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/Ai'
import './style.css'
import {Link ,useNavigate } from 'react-router-dom'

export default function landing_page() {

    const humMenu = useRef(null)

    function menu(reference){

        const item = reference.current

        console.log(reference)

        if (item.classList.contains("menu-btn")) {
            item.classList.toggle("close-btn")
            item.classList.toggle('top-[80px]')
            item.classList.toggle('opacity-100')
        } else {
            item.classList.toggle("menu-btn")
            item.classList.toggle('top-[80px]')
            item.classList.toggle('opacity-100')
        }

        // e.name === 'menu' ? (e.name = "close",list.classList.
        // add('top-[80px]') , list.classList.add('opacity-100')) : (e.name = "menu" ,list.classList. 
        // remove('top-[80px]'),list.classList.remove('opacity-100'))
    }

    useEffect(() => {
        console.log(humMenu.current)
        return
    },[humMenu])

  return (
    <div className='scroll-smooth'>
        <nav className="sticky top-0 bg-white px-20 py-1 md:flex md:items-center md:justify-between mx-auto border-b border-gray-100 z-10">
            <div className="flex justify-between items-center">
                <a href="index.html"><img className="w-60 inline" src="images/salestag_logo2.png" alt=""/></a>
                <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                    <AiOutlineMenu ref={humMenu} name="menu-outline" onClick={() => {menu(humMenu)}}></AiOutlineMenu>
                </span>
            </div>
            <ul className="font-semibold md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                <li className="mx-4 my-6 md:my-0"><a href="#features" className="uppercase text-lg hover:text-yellow-500">Features</a></li>
                <li className="mx-4 my-6 md:my-0"><a href="#about" className="uppercase text-lg hover:text-yellow-500">About</a></li>
                <li className="mx-4 my-6 md:my-0"><a href="#contact" className="uppercase text-lg hover:text-yellow-500">Contact</a></li>
                <li className="mx-4 my-6 md:my-0"><Link to={"/login"} className="uppercase text-lg text-yellow-500 hover:text-black">Log in</Link></li>
                <div className="p-5 md:flex md:flex-1 md:justify-end">
                    <Link to={"/register"} className="text-lg font-semibold leading-8 bg-[#01366C] text-white px-5 py-2 rounded-full hover:bg-[#040404]">Sign Up <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </ul>
        </nav>

        {/* <!-- hero --> */}
        <div className="w-full h-screen bg-no-repeat bg-cover bg-center bg-fixed hero-img">
            <section id="home" className="py-5">
                <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
                    <div className="my-14 lg:mb-0 lg:w-1/2">
                        <h1 className="max-w-xl text-[2.9rem] leading-none text-white font-black text-center md:text-5xl lg:text-left lg:leading-tight mb-5">Maximize sales and simplify your business with our online POS.</h1>
                        <p className="max-w-xl text-2xl text-center text-white lg:text-left lg:max-w-md">Streamline your business operations and increase sales with our user-friendly online POS system.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link to={"/register"} className="rounded-md bg-[#f3ad11] px-3.5 py-2.5 text-xl font-semibold text-black shadow-sm hover:bg-[#01366C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Get started</Link>
                            <a href="#features" className="text-xl font-semibold leading-6 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Learn more</a>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img className="ml-auto" src="images/hero_img2.png" alt=""/>
                    </div>
                </div>
            </section>    
        </div>

        {/* <!-- features --> */}
        <section id="features" className="my-14">
            <div className="py-12 bg-white sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h1 className="text-3xl text-[#f3ad11] font-extrabold tracking-wide uppercase">Features</h1>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-950 sm:text-4xl">A better way to manage business's money.</p>
                        <p className="mt-4 max-w-2xl text-xl text-black lg:mx-auto">Optimize your business operations and increase profitability with our comprehensive online POS solution.</p>
                    </div>
                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="static">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-950 text-white">
                                        {/* <!-- heroicon name: clipboard-document-list --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                        </svg>                                      
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-semibold text-blue-950">Inventory management</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-black">Effortlessly track and manage your inventory levels, reduce stockouts, and streamline your ordering process.</dd>
                            </div>
                            <div className="static">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-950 text-white">
                                        {/* <!-- heroicon name: banknotes --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                        </svg>                                      
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-semibold text-blue-950">Payment processing</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-black">Accept a wide variety of payment methods and process transactions quickly and securely.</dd>
                            </div>
                            <div className="static">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-950 text-white">
                                        {/* <!-- heroicon name: presentation-chart-line --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                        </svg>                                      
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-semibold text-blue-950">Sales tracking</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-black">Gain valuable insights into your business's sales performance and customer behavior with our real-time sales tracking feature, allowing you to make informed decisions and drive growth.</dd>
                            </div>
                            <div className="static">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-950 text-white">
                                        {/* <!-- heroicon name: document-check --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                                        </svg>                                                                          
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-semibold text-blue-950">Reports generation</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-black">Efficiently monitor and analyze your business's financial and operational performance with our comprehensive reporting feature, enabling you to make data-driven decisions and optimize your strategy.</dd>
                            </div>
                        </dl>
                    </div>    
                </div>
            </div>
        </section>

        {/* <!-- about --> */}
        <section id="about">
            <div class="px-10 dark:bg-slate-900">
                <div class="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
                    <div class="relative">
                        <img class="h-1/4 absolute top-0 left-0 -z-10" src="./img/dots.png" alt=""/>
                        <div class="h-full rounded-lg overflow-hidden">
                            <img src="images/undraw_web_shopping.png" alt=""/>
                        </div>
                    </div>
                    <div class="my-auto flex flex-col gap-3">
                        <h1 class="text-3xl text-[#f3ad11] font-extrabold tracking-wide uppercase">About us</h1>
                        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Empower small-scale retailers for growth by offering an easy to use and scalable point-of-sale solution.</p>
                        <br/>
                        <p class="text-white text-xl leading-8"><span class="font-semibold text-[#f3ad11] italic">Sales Tag</span> 's innovative Point of Sale solution drives customer acquisition, increase average order size, and makes the dream of long-lasting, loyal customer relationships a reality.</p>
                        <br/>
                        <p class="text-white text-xl">We set our ambition to have a positive impact on the lives of millions of small-scale retailers by increasing their income through operational efficiency.</p>
                    </div>
                </div>
            </div>
        </section>

            {/* <!-- contact --> */}
        <section id="contact">
            <div class="container py-20 text-lg mx-auto">
                <div class="text-center m-auto mb-20 md:w-1/2">
                    <h1 class="text-3xl text-[#f3ad11] font-extrabold tracking-wide uppercase mb-4">Get in touch</h1>
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-950 sm:text-4xl">Let us help you grow your business - submit your info and we'll be in touch!</p>
                </div>
                <form class="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-lg font-semibold leading-6 text-blue-950">First name</label>
                            <div class="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"/>
                            </div>
                        </div>
                        <div>
                            <label for="last-name" class="block text-lg font-semibold leading-6 text-blue-950">Last name</label>
                            <div class="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"/>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-lg font-semibold leading-6 text-blue-950">Email</label>
                            <div class="mt-2.5">
                                <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"/>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="phone-number" class="block text-lg font-semibold leading-6 text-blue-950">Phone number</label>
                            <div class="mt-2.5">
                                <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"/>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-lg font-semibold leading-6 text-blue-950">Message</label>
                            <div class="mt-2.5">
                                <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"></textarea>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label class="text-sm leading-6 text-gray-600">By submitting the form, you agree to our
                                <a href="#" class="font-semibold text-yellow-600">privacy policy</a>.
                            </label>
                        </div>
                    </div>
                    <div class="mt-10">
                        <button type="submit" class="block w-full rounded-md bg-[#f3ad11] px-3.5 py-2.5 text-center text-lg font-semibold text-black shadow-sm hover:bg-[#01366C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
                    </div>
                </form>
            </div>
        </section>

            {/* <!-- footer --> */}
        <footer class="p-4 bg-white sm:p-6 dark:bg-slate-900">
            <div class="mx-auto max-w-screen-xl">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="#" class="flex items-center"><img src="images/footer_logo.png" class="mr-3 h-24" alt=""/></a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-base font-semibold text-yellow-600 uppercase">Links</h2>
                            <ul class="text-gray-300">
                                <li class="mb-4"><a href="index.html" class="hover:underline">Home</a></li>
                                <li>
                                    <a href="login.html" class="hover:underline">Dashboard</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-base font-semibold text-yellow-600 uppercase">Resources</h2>
                            <ul class="text-gray-300">
                                <li class="mb-4"><a href="#features" class="hover:underline ">How It Works</a></li>
                                <li><a href="#" class="hover:underline">Partners</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-base font-semibold text-yellow-600 uppercase">Legal</h2>
                            <ul class="text-gray-300">
                                <li class="mb-4"><a href="#" class="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-500 sm:mx-auto lg:my-8"/>
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-base text-gray-500 sm:text-center">©2023 SALES TAG | Team 7 | Capstone | Andres Albis Israel Parco. All Rights Reserved.</span>
                    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
