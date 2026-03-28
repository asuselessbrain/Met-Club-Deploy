import { Target, Eye, Users, Award, MapPin, Heart, Shield, Sparkles, TrendingUp } from 'lucide-react';
import logo from "../../assets/images/logo_original.png"
import Partners from '../../components/Home/Partners';

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url(https://res.cloudinary.com/dwduymu1l/image/upload/v1759496842/Brown_Simple_Digital_Marketing_Presentation_g9igs2.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
                    <div className="flex items-center justify-center">
                        <img src={logo} alt="MET CLUB LOGO" />
                    </div>

                    <h1 className="text-7xl md:text-8xl font-black text-white mb-6 animate-slide-up" style={{ textShadow: '4px 4px 20px rgba(0,0,0,0.3)' }}>
                        MET CLUB
                    </h1>

                    <div className="text-5xl md:text-6xl font-bold text-yellow-300 mb-6 animate-slide-up delay-100">
                        আবহাওয়া চক্র
                    </div>

                    <p className="text-3xl md:text-4xl text-white font-semibold mb-8 animate-slide-up delay-200">
                        "তরুণ চিন্তা, শক্তিশালী সতর্কতা"
                    </p>

                    <div className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-300">
                        একটি যুব-চালিত প্ল্যাটফর্ম যেখানে শিশুরা আবহাওয়া পর্যবেক্ষণ এবং দুর্যোগ সতর্কতার মাধ্যমে তাদের সম্প্রদায়কে নিরাপদ রাখতে শিখে
                    </div>
                </div>

                <div className="absolute top-20 left-10 text-white text-6xl animate-float opacity-30">☀️</div>
                <div className="absolute top-40 right-20 text-white text-7xl animate-float-delayed opacity-30">☁️</div>
                <div className="absolute bottom-32 left-32 text-white text-5xl animate-float opacity-30">🌧️</div>
            </section>

            <section id="mission-vision" data-animate className={`py-24 px-4 bg-gradient-to-br from-orange-50 to-yellow-50`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="group bg-white rounded-3xl shadow-2xl p-10 hover:scale-105 transition-all duration-500 border-t-8 border-teal-500 animate-slide-right">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                    <Eye className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-4xl font-black text-gray-800">ভিশন</h3>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                একটি নিরাপদ ও সচেতন সমাজ গড়ে তুলতে শিশুদের আবহাওয়া পর্যবেক্ষণ, পূর্বাভাস এবং আগাম সতর্কতার শিক্ষা প্রদান করা।
                            </p>
                            <div className="mt-6 flex items-center space-x-2 text-teal-600">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-semibold">একটি নিরাপদ ভবিষ্যৎ</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-3xl shadow-2xl p-10 hover:scale-105 transition-all duration-500 border-t-8 border-orange-500 animate-slide-left">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-4xl font-black text-gray-800">মিশন</h3>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                একটি প্ল্যাটফর্ম যেখানে শিশুরা দুর্যোগের পূর্বাভাস এবং আগাম সতর্কতা সম্পর্কে জেনে নিজের পরিবার, জীবন এবং সম্পদ রক্ষা করতে পারবে।
                            </p>
                            <div className="mt-6 flex items-center space-x-2 text-orange-600">
                                <Heart className="w-5 h-5" />
                                <span className="font-semibold">সম্প্রদায় সুরক্ষা</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500 via-teal-500 to-cyan-500 rounded-3xl p-12 text-white shadow-2xl">
                        <div className="text-center mb-10">
                            <h3 className="text-4xl md:text-5xl font-black mb-4">MET ক্লাব কী?</h3>
                            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="text-center md:text-left">
                                <p className="text-2xl leading-relaxed mb-6">
                                    "MET CLUB – আবহাওয়াচক্র" একটি যুব-চালিত প্ল্যাটফর্ম যা শিশু এবং তরুণদের দ্বারা পরিচালিত হয়।
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                        <div className="text-3xl">📚</div>
                                        <span className="text-lg font-semibold">আবহাওয়া শিক্ষা ও প্রশিক্ষণ</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                        <div className="text-3xl">⚠️</div>
                                        <span className="text-lg font-semibold">আগাম সতর্কীকরণ ব্যবস্থা</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                        <div className="text-3xl">🦸</div>
                                        <span className="text-lg font-semibold">দুর্যোগ প্রস্তুতি</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="text-9xl animate-float"><img src={logo} alt="MET CLUB LOGO" /></div>
                                    <div className="absolute -top-8 -right-8 text-6xl animate-float-delayed">☀️</div>
                                    <div className="absolute -bottom-4 -left-8 text-6xl animate-float">🌧️</div>
                                    <div className="absolute top-1/2 -right-12 text-6xl animate-float-delayed">☁️</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="objectives" data-animate className={`py-24 px-4 bg-white`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">আমাদের উদ্দেশ্য</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            শিশুদের জীবন রক্ষাকারী দক্ষতা প্রদান এবং দুর্যোগ প্রস্তুতিতে তাদের ক্ষমতায়ন
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '🌡️', title: 'আবহাওয়া পর্যবেক্ষণের জ্ঞান প্রদান', color: 'from-blue-400 to-cyan-500' },
                            { icon: '⚠️', title: 'আগাম সতর্কীকরণ ব্যবস্থার অনিশ্চয়তা সম্পর্কে জানানো', color: 'from-orange-400 to-red-500' },
                            { icon: '🛡️', title: 'নিজেকে এবং অন্যকে নিরাপদ রাখতে শেখানো', color: 'from-green-400 to-teal-500' },
                            { icon: '💡', title: 'শিশুদের মাঝে সচেতনতা গড়ে তোলা', color: 'from-purple-400 to-pink-500' },
                            { icon: '✍️', title: 'হাতে কলমে প্রশিক্ষণ দেওয়া', color: 'from-yellow-400 to-orange-500' },
                            { icon: '🦸', title: 'দুর্যোগ মোকাবেলায় শিশুদের সক্রিয় ভূমিকা রাখতে অনুপ্রাণিত করা', color: 'from-indigo-400 to-blue-500' }
                        ].map((objective, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${objective.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg mx-auto`}>
                                    {objective.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 text-center leading-relaxed">
                                    {objective.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="structure" data-animate className={`py-24 px-4 bg-gradient-to-br from-yellow-50 to-orange-50 `}>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">সংগঠন কাঠামো</h2>
                        <p className="text-xl text-gray-600">যুব নেতৃত্ব এবং সহযোগিতার মাধ্যমে শক্তিশালী</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-4"></div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl p-12">
                            <div className="flex flex-col items-center space-y-8">
                                <div className="w-full max-w-md">
                                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                                        <Users className="w-12 h-12 mx-auto mb-3" />
                                        <h3 className="text-2xl font-bold">কারিগরি উপদেষ্টা</h3>
                                        <p className="text-sm mt-2 opacity-90">পেশাদার নির্দেশনা প্রদান</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1 h-12 bg-gradient-to-b from-teal-500 to-orange-500"></div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 w-full">
                                    <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                                        <Award className="w-10 h-10 mx-auto mb-3" />
                                        <h3 className="text-xl font-bold">প্রধান নির্বাহী</h3>
                                        <p className="text-3xl font-black mt-2">৪ জন</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                                        <Users className="w-10 h-10 mx-auto mb-3" />
                                        <h3 className="text-xl font-bold">কার্যনির্বাহী সদস্য</h3>
                                        <p className="text-3xl font-black mt-2">৭ জন</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500"></div>
                                </div>

                                <div className="w-full max-w-md">
                                    <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                                        <Heart className="w-12 h-12 mx-auto mb-3" />
                                        <h3 className="text-2xl font-bold">সাধারণ সদস্য</h3>
                                        <p className="text-sm mt-2 opacity-90">৭ম-৯ম শ্রেণির সকল শিক্ষার্থী</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="activities" data-animate className={`py-24 px-4 bg-gradient-to-br from-blue-50 to-cyan-50`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">আমাদের কার্যক্রম</h2>
                        <p className="text-xl text-gray-600">হাতে-কলমে শিক্ষা এবং সম্প্রদায় সম্পৃক্ততা</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6 mb-12">
                        {[
                            { icon: '👥', title: 'ক্লাব সভা', color: 'from-teal-400 to-cyan-500' },
                            { icon: '🌤️', title: 'আবহাওয়া পর্যবেক্ষণ', color: 'from-blue-400 to-indigo-500' },
                            { icon: '📚', title: 'ওয়ার্কশপ ও প্রশিক্ষণ', color: 'from-orange-400 to-red-500' },
                            { icon: '📢', title: 'সচেতনতা ক্যাম্পেইন', color: 'from-pink-400 to-purple-500' },
                            { icon: '📅', title: 'ইভেন্ট/দিবস উদ্যাপন', color: 'from-yellow-400 to-orange-500' }
                        ].map((activity, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-lg mx-auto`}>
                                    {activity.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 text-center">
                                    {activity.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform">
              <BookOpen className="w-16 h-16 mb-6 mx-auto" />
              <h3 className="text-3xl font-black text-center mb-6">শিক্ষা</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">আবহাওয়া পর্যবেক্ষণ কৌশল</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">পূর্বাভাস বিশ্লেষণ</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">প্রযুক্তিগত দক্ষতা</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform">
              <Shield className="w-16 h-16 mb-6 mx-auto" />
              <h3 className="text-3xl font-black text-center mb-6">সুরক্ষা</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">দুর্যোগ প্রস্তুতি</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">আগাম সতর্কতা</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">জরুরি পরিকল্পনা</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform">
              <Sparkles className="w-16 h-16 mb-6 mx-auto" />
              <h3 className="text-3xl font-black text-center mb-6">উন্নয়ন</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">নেতৃত্ব দক্ষতা</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">দলীয় কাজ</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">যোগাযোগ দক্ষতা</span>
                </li>
              </ul>
            </div>
          </div> */}
                </div>
            </section>

            <section id="impact" data-animate className={`py-24 px-4 bg-white`}>
                <div className="container mx-auto max-w-7xl">
                    {/* <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">আমাদের প্রভাব</h2>
            <p className="text-xl text-gray-600">সম্প্রদায়ে ইতিবাচক পরিবর্তন সৃষ্টি</p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '100+', label: 'সক্রিয় সদস্য', icon: '👥', color: 'from-blue-500 to-cyan-500' },
              { number: '50+', label: 'প্রশিক্ষণ সেশন', icon: '📚', color: 'from-orange-500 to-red-500' },
              { number: '3', label: 'জেলা কভারেজ', icon: '📍', color: 'from-green-500 to-teal-500' },
              { number: '1000+', label: 'সুবিধাভোগী', icon: '🎯', color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className={`text-6xl mb-4 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent font-black`}>
                  {stat.number}
                </div>
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{stat.label}</h3>
              </div>
            ))}
          </div> */}

                    <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl p-12 text-white text-center shadow-2xl">
                        <div className="flex items-center justify-center space-x-4">
                            <img src={logo} alt="MET CLUB LOGO" className='w-52 h-52' />
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6">Young Minds, Stronger Warnings</h2>
                        <p className="text-2xl md:text-3xl font-semibold mb-8">
                            আবহাওয়ার পূর্বাভাস বুঝে গড়ি আমাদের নিরাপদের পথ
                        </p>
                        <div className="max-w-4xl mx-auto text-lg leading-relaxed">
                            আমরা বিশ্বাস করি যে শিশুরা পরিবর্তনের শক্তিশালী এজেন্ট। MET ক্লাবের মাধ্যমে, আমরা তাদের জ্ঞান, দক্ষতা এবং আত্মবিশ্বাস দিয়ে সজ্জিত করি যাতে তারা তাদের পরিবার এবং সম্প্রদায়কে আবহাওয়াজনিত দুর্যোগ থেকে রক্ষা করতে পারে।
                        </div>
                    </div>
                </div>
            </section>

            <section id="locations" data-animate className={`py-24 px-4 bg-gradient-to-br from-green-50 to-teal-50`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">কার্যক্রমের এলাকা</h2>
                        <p className="text-xl text-gray-600">বাংলাদেশ জুড়ে সম্প্রসারণ</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group bg-white rounded-3xl shadow-2xl p-10 text-center hover:scale-105 transition-all duration-500 border-4 border-yellow-400">
                            <div className="relative mb-6">
                                <MapPin className="w-24 h-24 mx-auto text-yellow-500 group-hover:scale-110 transition-transform" />
                                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                                    চালু
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-gray-800 mb-3">চট্টগ্রাম</h3>
                            <p className="text-lg text-gray-600 font-semibold">বর্তমানে সক্রিয়</p>
                            <div className="mt-6 flex items-center justify-center space-x-2 text-green-600">
                                <TrendingUp className="w-5 h-5" />
                                <span className="font-semibold">৫০+ সদস্য</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-3xl shadow-2xl p-10 text-center hover:scale-105 transition-all duration-500 border-4 border-teal-400">
                            <div className="relative mb-6">
                                <MapPin className="w-24 h-24 mx-auto text-teal-500 group-hover:scale-110 transition-transform" />
                                <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                                    শীঘ্রই
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-gray-800 mb-3">পটুয়াখালী</h3>
                            <p className="text-lg text-gray-600 font-semibold">শীঘ্রই চালু হবে</p>
                            <div className="mt-6 flex items-center justify-center space-x-2 text-blue-600">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-semibold">প্রস্তুতি চলছে</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-3xl shadow-2xl p-10 text-center hover:scale-105 transition-all duration-500 border-4 border-green-400">
                            <div className="relative mb-6">
                                <MapPin className="w-24 h-24 mx-auto text-green-500 group-hover:scale-110 transition-transform" />
                                <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                                    শীঘ্রই
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-gray-800 mb-3">গাইবান্ধা</h3>
                            <p className="text-lg text-gray-600 font-semibold">শীঘ্রই চালু হবে</p>
                            <div className="mt-6 flex items-center justify-center space-x-2 text-blue-600">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-semibold">প্রস্তুতি চলছে</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="values" data-animate className={`py-24 px-4 bg-gradient-to-br from-purple-50 to-pink-50`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">আমাদের মূল্যবোধ</h2>
                        <p className="text-xl text-gray-600">শিশু সুরক্ষা এবং অন্তর্ভুক্তিতে প্রতিশ্রুতিবদ্ধ</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: '🤝', title: 'বন্ধুত্বপূর্ণ আচরণ', desc: 'সকলের সাথে শ্রদ্ধা এবং দয়া', color: 'from-blue-400 to-cyan-500' },
                            { icon: '🚫', title: 'ভিন্নমতে সম্মান', desc: 'মতামতের বৈচিত্র্য মূল্যায়ন', color: 'from-orange-400 to-red-500' },
                            { icon: '🌈', title: 'বৈচিত্র্যে শ্রদ্ধাশীল', desc: 'সকল পটভূমি স্বাগত', color: 'from-green-400 to-teal-500' },
                            { icon: '✋', title: 'স্বেচ্ছায় অংশগ্রহণ', desc: 'কোন বাধ্যবাধকতা নেই', color: 'from-purple-400 to-pink-500' }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg mx-auto`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl p-12 text-white text-center shadow-2xl">
                        <Shield className="w-20 h-20 mx-auto mb-6" />
                        <h3 className="text-4xl font-black mb-6">শিশু সুরক্ষা নীতি</h3>
                        <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                            MET ক্লাব সকল শিশুর সুরক্ষা এবং কল্যাণে প্রতিশ্রুতিবদ্ধ। আমরা একটি নিরাপদ, সহায়ক এবং অন্তর্ভুক্তিমূলক পরিবেশ নিশ্চিত করি যেখানে প্রতিটি শিশু শিখতে এবং বৃদ্ধি পেতে পারে। আমাদের কঠোর সুরক্ষা নীতি এবং প্রক্রিয়া রয়েছে যা আন্তর্জাতিক মান অনুসরণ করে।
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white pt-12 px-4">
                <div className="container mx-auto max-w-7xl text-center">
                    <div className="flex flex-col lg:flex-row items-center justify-center space-x-4">
                        <img src={logo} alt="MET CLUB LOGO" className='w-36 h-36' />
                        <div>
                            <h3 className="text-2xl font-black">MET CLUB</h3>
                            <p className="text-sm text-gray-400">আবহাওয়া চক্র</p>
                            <p className="text-gray-400 my-6">
                                "তরুণ চিন্তা, শক্তিশালী সতর্কতা"
                            </p>
                        </div>
                    </div>

                    <Partners bg="bg-white/60" />
                </div>
                <footer />
            </footer>
        </div>
    )
}
