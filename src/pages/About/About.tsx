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
                        à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾ à¦šà¦•à§à¦°
                    </div>

                    <p className="text-3xl md:text-4xl text-white font-semibold mb-8 animate-slide-up delay-200">
                        "à¦¤à¦°à§à¦£ à¦šà¦¿à¦¨à§à¦¤à¦¾, à¦¶à¦•à§à¦¤à¦¿à¦¶à¦¾à¦²à§€ à¦¸à¦¤à¦°à§à¦•à¦¤à¦¾"
                    </p>

                    <div className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-300">
                        à¦à¦•à¦Ÿà¦¿ à¦¯à§à¦¬-à¦šà¦¾à¦²à¦¿à¦¤ à¦ªà§à¦²à§à¦¯à¦¾à¦Ÿà¦«à¦°à§à¦® à¦¯à§‡à¦–à¦¾à¦¨à§‡ à¦¶à¦¿à¦¶à§à¦°à¦¾ à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾ à¦ªà¦°à§à¦¯à¦¬à§‡à¦•à§à¦·à¦£ à¦à¦¬à¦‚ à¦¦à§à¦°à§à¦¯à§‹à¦— à¦¸à¦¤à¦°à§à¦•à¦¤à¦¾à¦° à¦®à¦¾à¦§à§à¦¯à¦®à§‡ à¦¤à¦¾à¦¦à§‡à¦° à¦¸à¦®à§à¦ªà§à¦°à¦¦à¦¾à¦¯à¦¼à¦•à§‡ à¦¨à¦¿à¦°à¦¾à¦ªà¦¦ à¦°à¦¾à¦–à¦¤à§‡ à¦¶à¦¿à¦–à§‡
                    </div>
                </div>

                <div className="absolute top-20 left-10 text-white text-6xl animate-float opacity-30">â˜€ï¸</div>
                <div className="absolute top-40 right-20 text-white text-7xl animate-float-delayed opacity-30">â˜ï¸</div>
                <div className="absolute bottom-32 left-32 text-white text-5xl animate-float opacity-30">ðŸŒ§ï¸</div>
            </section>

            <section id="mission-vision" data-animate className={`py-24 px-4 bg-linear-to-br from-orange-50 to-yellow-50`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="group bg-white rounded-3xl shadow-2xl p-10 hover:scale-105 transition-all duration-500 border-t-8 border-red-500 animate-slide-right">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-20 h-20 bg-linear-to-br from-red-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                    <Eye className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-4xl font-black text-gray-800">à¦­à¦¿à¦¶à¦¨</h3>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                à¦à¦•à¦Ÿà¦¿ à¦¨à¦¿à¦°à¦¾à¦ªà¦¦ à¦“ à¦¸à¦šà§‡à¦¤à¦¨ à¦¸à¦®à¦¾à¦œ à¦—à¦¡à¦¼à§‡ à¦¤à§à¦²à¦¤à§‡ à¦¶à¦¿à¦¶à§à¦¦à§‡à¦° à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾ à¦ªà¦°à§à¦¯à¦¬à§‡à¦•à§à¦·à¦£, à¦ªà§‚à¦°à§à¦¬à¦¾à¦­à¦¾à¦¸ à¦à¦¬à¦‚ à¦†à¦—à¦¾à¦® à¦¸à¦¤à¦°à§à¦•à¦¤à¦¾à¦° à¦¶à¦¿à¦•à§à¦·à¦¾ à¦ªà§à¦°à¦¦à¦¾à¦¨ à¦•à¦°à¦¾à¥¤
                            </p>
                            <div className="mt-6 flex items-center space-x-2 text-red-600">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-semibold">à¦à¦•à¦Ÿà¦¿ à¦¨à¦¿à¦°à¦¾à¦ªà¦¦ à¦­à¦¬à¦¿à¦·à§à¦¯à§Ž</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-3xl shadow-2xl p-10 hover:scale-105 transition-all duration-500 border-t-8 border-orange-500 animate-slide-left">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-20 h-20 bg-linear-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-4xl font-black text-gray-800">à¦®à¦¿à¦¶à¦¨</h3>
                            </div>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                à¦à¦•à¦Ÿà¦¿ à¦ªà§à¦²à§à¦¯à¦¾à¦Ÿà¦«à¦°à§à¦® à¦¯à§‡à¦–à¦¾à¦¨à§‡ à¦¶à¦¿à¦¶à§à¦°à¦¾ à¦¦à§à¦°à§à¦¯à§‹à¦—à§‡à¦° à¦ªà§‚à¦°à§à¦¬à¦¾à¦­à¦¾à¦¸ à¦à¦¬à¦‚ à¦†à¦—à¦¾à¦® à¦¸à¦¤à¦°à§à¦•à¦¤à¦¾ à¦¸à¦®à§à¦ªà¦°à§à¦•à§‡ à¦œà§‡à¦¨à§‡ à¦¨à¦¿à¦œà§‡à¦° à¦ªà¦°à¦¿à¦¬à¦¾à¦°, à¦œà§€à¦¬à¦¨ à¦à¦¬à¦‚ à¦¸à¦®à§à¦ªà¦¦ à¦°à¦•à§à¦·à¦¾ à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à¦¬à§‡à¥¤
                            </p>
                            <div className="mt-6 flex items-center space-x-2 text-orange-600">
                                <Heart className="w-5 h-5" />
                                <span className="font-semibold">à¦¸à¦®à§à¦ªà§à¦°à¦¦à¦¾à¦¯à¦¼ à¦¸à§à¦°à¦•à§à¦·à¦¾</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-linear-to-br from-red-500 via-rose-500 to-orange-500 rounded-3xl p-12 text-white shadow-2xl">
                        <div className="text-center mb-10">
                            <h3 className="text-4xl md:text-5xl font-black mb-4">MET à¦•à§à¦²à¦¾à¦¬ à¦•à§€?</h3>
                            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="text-center md:text-left">
                                <p className="text-2xl leading-relaxed mb-6">
                                    "MET CLUB â€“ à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾à¦šà¦•à§à¦°" à¦à¦•à¦Ÿà¦¿ à¦¯à§à¦¬-à¦šà¦¾à¦²à¦¿à¦¤ à¦ªà§à¦²à§à¦¯à¦¾à¦Ÿà¦«à¦°à§à¦® à¦¯à¦¾ à¦¶à¦¿à¦¶à§ à¦à¦¬à¦‚ à¦¤à¦°à§à¦£à¦¦à§‡à¦° à¦¦à§à¦¬à¦¾à¦°à¦¾ à¦ªà¦°à¦¿à¦šà¦¾à¦²à¦¿à¦¤ à¦¹à¦¯à¦¼à¥¤
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                        <div className="text-3xl">ðŸ“š</div>
                                        <span className="text-lg font-semibold">à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾ à¦¶à¦¿à¦•à§à¦·à¦¾ à¦“ à¦ªà§à¦°à¦¶à¦¿à¦•à§à¦·à¦£</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                        <div className="text-3xl">âš ï¸</div>
                                        <span className="text-lg font-semibold">à¦†à¦—à¦¾à¦® à¦¸à¦¤à¦°à§à¦•à§€à¦•à¦°à¦£ à¦¬à§à¦¯à¦¬à¦¸à§à¦¥à¦¾</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                                        <div className="text-3xl">ðŸ¦¸</div>
                                        <span className="text-lg font-semibold">à¦¦à§à¦°à§à¦¯à§‹à¦— à¦ªà§à¦°à¦¸à§à¦¤à§à¦¤à¦¿</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="text-9xl animate-float"><img src={logo} alt="MET CLUB LOGO" /></div>
                                    <div className="absolute -top-8 -right-8 text-6xl animate-float-delayed">â˜€ï¸</div>
                                    <div className="absolute -bottom-4 -left-8 text-6xl animate-float">ðŸŒ§ï¸</div>
                                    <div className="absolute top-1/2 -right-12 text-6xl animate-float-delayed">â˜ï¸</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="objectives" data-animate className={`py-24 px-4 bg-white`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">à¦†à¦®à¦¾à¦¦à§‡à¦° à¦‰à¦¦à§à¦¦à§‡à¦¶à§à¦¯</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            à¦¶à¦¿à¦¶à§à¦¦à§‡à¦° à¦œà§€à¦¬à¦¨ à¦°à¦•à§à¦·à¦¾à¦•à¦¾à¦°à§€ à¦¦à¦•à§à¦·à¦¤à¦¾ à¦ªà§à¦°à¦¦à¦¾à¦¨ à¦à¦¬à¦‚ à¦¦à§à¦°à§à¦¯à§‹à¦— à¦ªà§à¦°à¦¸à§à¦¤à§à¦¤à¦¿à¦¤à§‡ à¦¤à¦¾à¦¦à§‡à¦° à¦•à§à¦·à¦®à¦¤à¦¾à¦¯à¦¼à¦¨
                        </p>
                        <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-500 mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: 'ðŸŒ¡ï¸', title: 'à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾ à¦ªà¦°à§à¦¯à¦¬à§‡à¦•à§à¦·à¦£à§‡à¦° à¦œà§à¦žà¦¾à¦¨ à¦ªà§à¦°à¦¦à¦¾à¦¨', color: 'from-red-400 to-rose-500' },
                            { icon: 'âš ï¸', title: 'à¦†à¦—à¦¾à¦® à¦¸à¦¤à¦°à§à¦•à§€à¦•à¦°à¦£ à¦¬à§à¦¯à¦¬à¦¸à§à¦¥à¦¾à¦° à¦…à¦¨à¦¿à¦¶à§à¦šà¦¯à¦¼à¦¤à¦¾ à¦¸à¦®à§à¦ªà¦°à§à¦•à§‡ à¦œà¦¾à¦¨à¦¾à¦¨à§‹', color: 'from-orange-400 to-red-500' },
                            { icon: 'ðŸ›¡ï¸', title: 'à¦¨à¦¿à¦œà§‡à¦•à§‡ à¦à¦¬à¦‚ à¦…à¦¨à§à¦¯à¦•à§‡ à¦¨à¦¿à¦°à¦¾à¦ªà¦¦ à¦°à¦¾à¦–à¦¤à§‡ à¦¶à§‡à¦–à¦¾à¦¨à§‹', color: 'from-red-500 to-orange-500' },
                            { icon: 'ðŸ’¡', title: 'à¦¶à¦¿à¦¶à§à¦¦à§‡à¦° à¦®à¦¾à¦à§‡ à¦¸à¦šà§‡à¦¤à¦¨à¦¤à¦¾ à¦—à¦¡à¦¼à§‡ à¦¤à§‹à¦²à¦¾', color: 'from-rose-400 to-red-500' },
                            { icon: 'âœï¸', title: 'à¦¹à¦¾à¦¤à§‡ à¦•à¦²à¦®à§‡ à¦ªà§à¦°à¦¶à¦¿à¦•à§à¦·à¦£ à¦¦à§‡à¦“à¦¯à¦¼à¦¾', color: 'from-yellow-400 to-orange-500' },
                            { icon: 'ðŸ¦¸', title: 'à¦¦à§à¦°à§à¦¯à§‹à¦— à¦®à§‹à¦•à¦¾à¦¬à§‡à¦²à¦¾à¦¯à¦¼ à¦¶à¦¿à¦¶à§à¦¦à§‡à¦° à¦¸à¦•à§à¦°à¦¿à¦¯à¦¼ à¦­à§‚à¦®à¦¿à¦•à¦¾ à¦°à¦¾à¦–à¦¤à§‡ à¦…à¦¨à§à¦ªà§à¦°à¦¾à¦£à¦¿à¦¤ à¦•à¦°à¦¾', color: 'from-orange-400 to-red-500' }
                        ].map((objective, index) => (
                            <div
                                key={index}
                                className="group bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-20 h-20 bg-linear-to-br ${objective.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg mx-auto`}>
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

            <section id="structure" data-animate className={`py-24 px-4 bg-linear-to-br from-yellow-50 to-orange-50 `}>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">à¦¸à¦‚à¦—à¦ à¦¨ à¦•à¦¾à¦ à¦¾à¦®à§‹</h2>
                        <p className="text-xl text-gray-600">à¦¯à§à¦¬ à¦¨à§‡à¦¤à§ƒà¦¤à§à¦¬ à¦à¦¬à¦‚ à¦¸à¦¹à¦¯à§‹à¦—à¦¿à¦¤à¦¾à¦° à¦®à¦¾à¦§à§à¦¯à¦®à§‡ à¦¶à¦•à§à¦¤à¦¿à¦¶à¦¾à¦²à§€</p>
                        <div className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-500 mx-auto mt-4"></div>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl p-12">
                            <div className="flex flex-col items-center space-y-8">
                                <div className="w-full max-w-md">
                                    <div className="bg-linear-to-r from-red-500 to-rose-500 text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                                        <Users className="w-12 h-12 mx-auto mb-3" />
                                        <h3 className="text-2xl font-bold">à¦•à¦¾à¦°à¦¿à¦—à¦°à¦¿ à¦‰à¦ªà¦¦à§‡à¦·à§à¦Ÿà¦¾</h3>
                                        <p className="text-sm mt-2 opacity-90">à¦ªà§‡à¦¶à¦¾à¦¦à¦¾à¦° à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶à¦¨à¦¾ à¦ªà§à¦°à¦¦à¦¾à¦¨</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1 h-12 bg-linear-to-b from-red-500 to-orange-500"></div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 w-full">
                                    <div className="bg-linear-to-br from-orange-400 to-red-500 text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                                        <Award className="w-10 h-10 mx-auto mb-3" />
                                        <h3 className="text-xl font-bold">à¦ªà§à¦°à¦§à¦¾à¦¨ à¦¨à¦¿à¦°à§à¦¬à¦¾à¦¹à§€</h3>
                                        <p className="text-3xl font-black mt-2">à§ª à¦œà¦¨</p>
                                    </div>
                                    <div className="bg-linear-to-br from-rose-400 to-red-500 text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                                        <Users className="w-10 h-10 mx-auto mb-3" />
                                        <h3 className="text-xl font-bold">à¦•à¦¾à¦°à§à¦¯à¦¨à¦¿à¦°à§à¦¬à¦¾à¦¹à§€ à¦¸à¦¦à¦¸à§à¦¯</h3>
                                        <p className="text-3xl font-black mt-2">à§­ à¦œà¦¨</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1 h-12 bg-linear-to-b from-red-500 to-rose-500"></div>
                                </div>

                                <div className="w-full max-w-md">
                                    <div className="bg-linear-to-r from-red-400 to-orange-500 text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                                        <Heart className="w-12 h-12 mx-auto mb-3" />
                                        <h3 className="text-2xl font-bold">à¦¸à¦¾à¦§à¦¾à¦°à¦£ à¦¸à¦¦à¦¸à§à¦¯</h3>
                                        <p className="text-sm mt-2 opacity-90">à§­à¦®-à§¯à¦® à¦¶à§à¦°à§‡à¦£à¦¿à¦° à¦¸à¦•à¦² à¦¶à¦¿à¦•à§à¦·à¦¾à¦°à§à¦¥à§€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="activities" data-animate className={`py-24 px-4 bg-linear-to-br from-red-50 to-rose-50`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">à¦†à¦®à¦¾à¦¦à§‡à¦° à¦•à¦¾à¦°à§à¦¯à¦•à§à¦°à¦®</h2>
                        <p className="text-xl text-gray-600">à¦¹à¦¾à¦¤à§‡-à¦•à¦²à¦®à§‡ à¦¶à¦¿à¦•à§à¦·à¦¾ à¦à¦¬à¦‚ à¦¸à¦®à§à¦ªà§à¦°à¦¦à¦¾à¦¯à¦¼ à¦¸à¦®à§à¦ªà§ƒà¦•à§à¦¤à¦¤à¦¾</p>
                        <div className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-500 mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6 mb-12">
                        {[
                            { icon: 'ðŸ‘¥', title: 'à¦•à§à¦²à¦¾à¦¬ à¦¸à¦­à¦¾', color: 'from-red-400 to-rose-500' },
                            { icon: 'ðŸŒ¤ï¸', title: 'à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾ à¦ªà¦°à§à¦¯à¦¬à§‡à¦•à§à¦·à¦£', color: 'from-rose-400 to-red-500' },
                            { icon: 'ðŸ“š', title: 'à¦“à¦¯à¦¼à¦¾à¦°à§à¦•à¦¶à¦ª à¦“ à¦ªà§à¦°à¦¶à¦¿à¦•à§à¦·à¦£', color: 'from-orange-400 to-red-500' },
                            { icon: 'ðŸ“¢', title: 'à¦¸à¦šà§‡à¦¤à¦¨à¦¤à¦¾ à¦•à§à¦¯à¦¾à¦®à§à¦ªà§‡à¦‡à¦¨', color: 'from-red-400 to-orange-500' },
                            { icon: 'ðŸ“…', title: 'à¦‡à¦­à§‡à¦¨à§à¦Ÿ/à¦¦à¦¿à¦¬à¦¸ à¦‰à¦¦à§à¦¯à¦¾à¦ªà¦¨', color: 'from-yellow-400 to-orange-500' }
                        ].map((activity, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                            >
                                <div className={`w-20 h-20 bg-linear-to-br ${activity.color} rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-lg mx-auto`}>
                                    {activity.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 text-center">
                                    {activity.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-green-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform">
              <BookOpen className="w-16 h-16 mb-6 mx-auto" />
              <h3 className="text-3xl font-black text-center mb-6">à¦¶à¦¿à¦•à§à¦·à¦¾</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">âœ“</span>
                  <span className="font-semibold">à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾ à¦ªà¦°à§à¦¯à¦¬à§‡à¦•à§à¦·à¦£ à¦•à§Œà¦¶à¦²</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">âœ“</span>
                  <span className="font-semibold">à¦ªà§‚à¦°à§à¦¬à¦¾à¦­à¦¾à¦¸ à¦¬à¦¿à¦¶à§à¦²à§‡à¦·à¦£</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">âœ“</span>
                  <span className="font-semibold">à¦ªà§à¦°à¦¯à§à¦•à§à¦¤à¦¿à¦—à¦¤ à¦¦à¦•à§à¦·à¦¤à¦¾</span>
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform">
              <Shield className="w-16 h-16 mb-6 mx-auto" />
              <h3 className="text-3xl font-black text-center mb-6">à¦¸à§à¦°à¦•à§à¦·à¦¾</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">âœ“</span>
                  <span className="font-semibold">à¦¦à§à¦°à§à¦¯à§‹à¦— à¦ªà§à¦°à¦¸à§à¦¤à§à¦¤à¦¿</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">âœ“</span>
                  <span className="font-semibold">à¦†à¦—à¦¾à¦® à¦¸à¦¤à¦°à§à¦•à¦¤à¦¾</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">âœ“</span>
                  <span className="font-semibold">à¦œà¦°à§à¦°à¦¿ à¦ªà¦°à¦¿à¦•à¦²à§à¦ªà¦¨à¦¾</span>
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-purple-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform">
              <Sparkles className="w-16 h-16 mb-6 mx-auto" />
              <h3 className="text-3xl font-black text-center mb-6">à¦‰à¦¨à§à¦¨à¦¯à¦¼à¦¨</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">âœ“</span>
                  <span className="font-semibold">à¦¨à§‡à¦¤à§ƒà¦¤à§à¦¬ à¦¦à¦•à§à¦·à¦¤à¦¾</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">âœ“</span>
                  <span className="font-semibold">à¦¦à¦²à§€à¦¯à¦¼ à¦•à¦¾à¦œ</span>
                </li>
                <li className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                  <span className="text-2xl">âœ“</span>
                  <span className="font-semibold">à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦— à¦¦à¦•à§à¦·à¦¤à¦¾</span>
                </li>
              </ul>
            </div>
          </div> */}
                </div>
            </section>

            <section id="impact" data-animate className={`py-24 px-4 bg-white`}>
                <div className="container mx-auto max-w-7xl">
                    {/* <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">à¦†à¦®à¦¾à¦¦à§‡à¦° à¦ªà§à¦°à¦­à¦¾à¦¬</h2>
            <p className="text-xl text-gray-600">à¦¸à¦®à§à¦ªà§à¦°à¦¦à¦¾à¦¯à¦¼à§‡ à¦‡à¦¤à¦¿à¦¬à¦¾à¦šà¦• à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§ƒà¦·à§à¦Ÿà¦¿</p>
            <div className="w-24 h-1 bg-linear-to-r from-green-500 to-teal-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '100+', label: 'à¦¸à¦•à§à¦°à¦¿à¦¯à¦¼ à¦¸à¦¦à¦¸à§à¦¯', icon: 'ðŸ‘¥', color: 'from-blue-500 to-cyan-500' },
              { number: '50+', label: 'à¦ªà§à¦°à¦¶à¦¿à¦•à§à¦·à¦£ à¦¸à§‡à¦¶à¦¨', icon: 'ðŸ“š', color: 'from-orange-500 to-red-500' },
              { number: '3', label: 'à¦œà§‡à¦²à¦¾ à¦•à¦­à¦¾à¦°à§‡à¦œ', icon: 'ðŸ“', color: 'from-green-500 to-teal-500' },
              { number: '1000+', label: 'à¦¸à§à¦¬à¦¿à¦§à¦¾à¦­à§‹à¦—à§€', icon: 'ðŸŽ¯', color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className={`text-6xl mb-4 bg-linear-to-br ${stat.color} bg-clip-text text-transparent font-black`}>
                  {stat.number}
                </div>
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{stat.label}</h3>
              </div>
            ))}
          </div> */}

                    <div className="bg-linear-to-r from-red-500 via-rose-500 to-orange-500 rounded-3xl p-12 text-white text-center shadow-2xl">
                        <div className="flex items-center justify-center space-x-4">
                            <img src={logo} alt="MET CLUB LOGO" className='w-52 h-52' />
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6">Young Minds, Stronger Warnings</h2>
                        <p className="text-2xl md:text-3xl font-semibold mb-8">
                            à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾à¦° à¦ªà§‚à¦°à§à¦¬à¦¾à¦­à¦¾à¦¸ à¦¬à§à¦à§‡ à¦—à¦¡à¦¼à¦¿ à¦†à¦®à¦¾à¦¦à§‡à¦° à¦¨à¦¿à¦°à¦¾à¦ªà¦¦à§‡à¦° à¦ªà¦¥
                        </p>
                        <div className="max-w-4xl mx-auto text-lg leading-relaxed">
                            à¦†à¦®à¦°à¦¾ à¦¬à¦¿à¦¶à§à¦¬à¦¾à¦¸ à¦•à¦°à¦¿ à¦¯à§‡ à¦¶à¦¿à¦¶à§à¦°à¦¾ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨à§‡à¦° à¦¶à¦•à§à¦¤à¦¿à¦¶à¦¾à¦²à§€ à¦à¦œà§‡à¦¨à§à¦Ÿà¥¤ MET à¦•à§à¦²à¦¾à¦¬à§‡à¦° à¦®à¦¾à¦§à§à¦¯à¦®à§‡, à¦†à¦®à¦°à¦¾ à¦¤à¦¾à¦¦à§‡à¦° à¦œà§à¦žà¦¾à¦¨, à¦¦à¦•à§à¦·à¦¤à¦¾ à¦à¦¬à¦‚ à¦†à¦¤à§à¦®à¦¬à¦¿à¦¶à§à¦¬à¦¾à¦¸ à¦¦à¦¿à¦¯à¦¼à§‡ à¦¸à¦œà§à¦œà¦¿à¦¤ à¦•à¦°à¦¿ à¦¯à¦¾à¦¤à§‡ à¦¤à¦¾à¦°à¦¾ à¦¤à¦¾à¦¦à§‡à¦° à¦ªà¦°à¦¿à¦¬à¦¾à¦° à¦à¦¬à¦‚ à¦¸à¦®à§à¦ªà§à¦°à¦¦à¦¾à¦¯à¦¼à¦•à§‡ à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾à¦œà¦¨à¦¿à¦¤ à¦¦à§à¦°à§à¦¯à§‹à¦— à¦¥à§‡à¦•à§‡ à¦°à¦•à§à¦·à¦¾ à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¥¤
                        </div>
                    </div>
                </div>
            </section>

            <section id="locations" data-animate className={`py-24 px-4 bg-linear-to-br from-red-50 to-orange-50`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">à¦•à¦¾à¦°à§à¦¯à¦•à§à¦°à¦®à§‡à¦° à¦à¦²à¦¾à¦•à¦¾</h2>
                        <p className="text-xl text-gray-600">à¦¬à¦¾à¦‚à¦²à¦¾à¦¦à§‡à¦¶ à¦œà§à¦¡à¦¼à§‡ à¦¸à¦®à§à¦ªà§à¦°à¦¸à¦¾à¦°à¦£</p>
                        <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-red-500 mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group bg-white rounded-3xl shadow-2xl p-10 text-center hover:scale-105 transition-all duration-500 border-4 border-yellow-400">
                            <div className="relative mb-6">
                                <MapPin className="w-24 h-24 mx-auto text-yellow-500 group-hover:scale-110 transition-transform" />
                                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                                    à¦šà¦¾à¦²à§
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-gray-800 mb-3">à¦šà¦Ÿà§à¦Ÿà¦—à§à¦°à¦¾à¦®</h3>
                            <p className="text-lg text-gray-600 font-semibold">à¦¬à¦°à§à¦¤à¦®à¦¾à¦¨à§‡ à¦¸à¦•à§à¦°à¦¿à¦¯à¦¼</p>
                            <div className="mt-6 flex items-center justify-center space-x-2 text-red-600">
                                <TrendingUp className="w-5 h-5" />
                                <span className="font-semibold">à§«à§¦+ à¦¸à¦¦à¦¸à§à¦¯</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-3xl shadow-2xl p-10 text-center hover:scale-105 transition-all duration-500 border-4 border-red-300">
                            <div className="relative mb-6">
                                <MapPin className="w-24 h-24 mx-auto text-red-500 group-hover:scale-110 transition-transform" />
                                <div className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                                    à¦¶à§€à¦˜à§à¦°à¦‡
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-gray-800 mb-3">à¦ªà¦Ÿà§à¦¯à¦¼à¦¾à¦–à¦¾à¦²à§€</h3>
                            <p className="text-lg text-gray-600 font-semibold">à¦¶à§€à¦˜à§à¦°à¦‡ à¦šà¦¾à¦²à§ à¦¹à¦¬à§‡</p>
                            <div className="mt-6 flex items-center justify-center space-x-2 text-red-600">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-semibold">à¦ªà§à¦°à¦¸à§à¦¤à§à¦¤à¦¿ à¦šà¦²à¦›à§‡</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-3xl shadow-2xl p-10 text-center hover:scale-105 transition-all duration-500 border-4 border-red-300">
                            <div className="relative mb-6">
                                <MapPin className="w-24 h-24 mx-auto text-red-500 group-hover:scale-110 transition-transform" />
                                <div className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                                    à¦¶à§€à¦˜à§à¦°à¦‡
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-gray-800 mb-3">à¦—à¦¾à¦‡à¦¬à¦¾à¦¨à§à¦§à¦¾</h3>
                            <p className="text-lg text-gray-600 font-semibold">à¦¶à§€à¦˜à§à¦°à¦‡ à¦šà¦¾à¦²à§ à¦¹à¦¬à§‡</p>
                            <div className="mt-6 flex items-center justify-center space-x-2 text-red-600">
                                <Sparkles className="w-5 h-5" />
                                <span className="font-semibold">à¦ªà§à¦°à¦¸à§à¦¤à§à¦¤à¦¿ à¦šà¦²à¦›à§‡</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="values" data-animate className={`py-24 px-4 bg-linear-to-br from-red-50 to-rose-50`}>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-4">à¦†à¦®à¦¾à¦¦à§‡à¦° à¦®à§‚à¦²à§à¦¯à¦¬à§‹à¦§</h2>
                        <p className="text-xl text-gray-600">à¦¶à¦¿à¦¶à§ à¦¸à§à¦°à¦•à§à¦·à¦¾ à¦à¦¬à¦‚ à¦…à¦¨à§à¦¤à¦°à§à¦­à§à¦•à§à¦¤à¦¿à¦¤à§‡ à¦ªà§à¦°à¦¤à¦¿à¦¶à§à¦°à§à¦¤à¦¿à¦¬à¦¦à§à¦§</p>
                        <div className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-500 mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: 'ðŸ¤', title: 'à¦¬à¦¨à§à¦§à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£ à¦†à¦šà¦°à¦£', desc: 'à¦¸à¦•à¦²à§‡à¦° à¦¸à¦¾à¦¥à§‡ à¦¶à§à¦°à¦¦à§à¦§à¦¾ à¦à¦¬à¦‚ à¦¦à¦¯à¦¼à¦¾', color: 'from-red-400 to-rose-500' },
                            { icon: 'ðŸš«', title: 'à¦­à¦¿à¦¨à§à¦¨à¦®à¦¤à§‡ à¦¸à¦®à§à¦®à¦¾à¦¨', desc: 'à¦®à¦¤à¦¾à¦®à¦¤à§‡à¦° à¦¬à§ˆà¦šà¦¿à¦¤à§à¦°à§à¦¯ à¦®à§‚à¦²à§à¦¯à¦¾à¦¯à¦¼à¦¨', color: 'from-orange-400 to-red-500' },
                            { icon: 'ðŸŒˆ', title: 'à¦¬à§ˆà¦šà¦¿à¦¤à§à¦°à§à¦¯à§‡ à¦¶à§à¦°à¦¦à§à¦§à¦¾à¦¶à§€à¦²', desc: 'à¦¸à¦•à¦² à¦ªà¦Ÿà¦­à§‚à¦®à¦¿ à¦¸à§à¦¬à¦¾à¦—à¦¤', color: 'from-red-500 to-orange-500' },
                            { icon: 'âœ‹', title: 'à¦¸à§à¦¬à§‡à¦šà§à¦›à¦¾à¦¯à¦¼ à¦…à¦‚à¦¶à¦—à§à¦°à¦¹à¦£', desc: 'à¦•à§‹à¦¨ à¦¬à¦¾à¦§à§à¦¯à¦¬à¦¾à¦§à¦•à¦¤à¦¾ à¦¨à§‡à¦‡', color: 'from-rose-400 to-red-500' }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className={`w-20 h-20 bg-linear-to-br ${value.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg mx-auto`}>
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

                    <div className="mt-16 bg-linear-to-r from-red-500 to-orange-500 rounded-3xl p-12 text-white text-center shadow-2xl">
                        <Shield className="w-20 h-20 mx-auto mb-6" />
                        <h3 className="text-4xl font-black mb-6">à¦¶à¦¿à¦¶à§ à¦¸à§à¦°à¦•à§à¦·à¦¾ à¦¨à§€à¦¤à¦¿</h3>
                        <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                            MET à¦•à§à¦²à¦¾à¦¬ à¦¸à¦•à¦² à¦¶à¦¿à¦¶à§à¦° à¦¸à§à¦°à¦•à§à¦·à¦¾ à¦à¦¬à¦‚ à¦•à¦²à§à¦¯à¦¾à¦£à§‡ à¦ªà§à¦°à¦¤à¦¿à¦¶à§à¦°à§à¦¤à¦¿à¦¬à¦¦à§à¦§à¥¤ à¦†à¦®à¦°à¦¾ à¦à¦•à¦Ÿà¦¿ à¦¨à¦¿à¦°à¦¾à¦ªà¦¦, à¦¸à¦¹à¦¾à¦¯à¦¼à¦• à¦à¦¬à¦‚ à¦…à¦¨à§à¦¤à¦°à§à¦­à§à¦•à§à¦¤à¦¿à¦®à§‚à¦²à¦• à¦ªà¦°à¦¿à¦¬à§‡à¦¶ à¦¨à¦¿à¦¶à§à¦šà¦¿à¦¤ à¦•à¦°à¦¿ à¦¯à§‡à¦–à¦¾à¦¨à§‡ à¦ªà§à¦°à¦¤à¦¿à¦Ÿà¦¿ à¦¶à¦¿à¦¶à§ à¦¶à¦¿à¦–à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à§ƒà¦¦à§à¦§à¦¿ à¦ªà§‡à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¥¤ à¦†à¦®à¦¾à¦¦à§‡à¦° à¦•à¦ à§‹à¦° à¦¸à§à¦°à¦•à§à¦·à¦¾ à¦¨à§€à¦¤à¦¿ à¦à¦¬à¦‚ à¦ªà§à¦°à¦•à§à¦°à¦¿à¦¯à¦¼à¦¾ à¦°à¦¯à¦¼à§‡à¦›à§‡ à¦¯à¦¾ à¦†à¦¨à§à¦¤à¦°à§à¦œà¦¾à¦¤à¦¿à¦• à¦®à¦¾à¦¨ à¦…à¦¨à§à¦¸à¦°à¦£ à¦•à¦°à§‡à¥¤
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
                            <p className="text-sm text-gray-400">à¦†à¦¬à¦¹à¦¾à¦“à¦¯à¦¼à¦¾ à¦šà¦•à§à¦°</p>
                            <p className="text-gray-400 my-6">
                                "à¦¤à¦°à§à¦£ à¦šà¦¿à¦¨à§à¦¤à¦¾, à¦¶à¦•à§à¦¤à¦¿à¦¶à¦¾à¦²à§€ à¦¸à¦¤à¦°à§à¦•à¦¤à¦¾"
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

