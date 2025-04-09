'use client'

import Image from 'next/image';

const featureData = [
    {
        image: "/assets/images/store.png",
        title: 'Store Setup',
        description: 'Get your online store up and running easily with our intuitive platform.',
        bgColor: "bg-white dark:bg-gradient-to-r dark:from-gray-50 dark:to-dark-700"
    },
    {
        image: "/assets/images/document.png",
        title: 'Order Management',
        description: 'Automate your order processing workflow and save valuable time.',
        bgColor: 'bg-green-50 dark:bg-gradient-to-r dark:from-gray-50 dark:to-dark-700',
    },
    {
        image: "/assets/images/payment-integration.png",
        title: 'Payment Integration',
        description: 'Accept payments through multiple payment providers like Stripe and bKash.',
        bgColor: 'bg-green-50 dark:bg-gradient-to-r dark:from-gray-50 dark:to-dark-700',
    },
    {
        image: "/assets/images/delivery-system.png",
        title: 'Delivery System',
        description: 'Connect with multiple delivery providers like Pathao and RedX for smooth logistics.',
        bgColor: 'bg-white dark:bg-gradient-to-r dark:from-gray-50 dark:to-dark-700',
    },
];

const Features = () => {
    return (
        <section id="keyfeatures" className="bg-gray-100  dark:bg-gradient-to-r dark:from-dark-200 dark:to-dark-500 
        py-8 sm:py-16">
            <div className="container mx-auto px-6 text-center max-w-5xl">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-green-950
                 mb-8 sm:mb-12  dark:text-dark-700">
                    Key Features of UddoktaHut
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {featureData.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bgColor} flex items-center gap-2 p-8 shadow-sm hover:scale-105 
                            transition-all rounded-xl`}
                        >
                            <div className='relative w-fit'>
                                <Image src={feature.image}
                                    alt='image'
                                    width={140}
                                    height={120}
                                    className="object-cover"
                                />
                            </div>
                            <div className='text-start w-fit'>
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                                <p className='text-sm sm:text-[16px] text-gray-800'>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
