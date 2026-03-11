import logo from '../assets/chefClaudeLogo.png';

export default function Header() {
    return (
        <div className="flex justify-center p-4 bg-white text-black border-2 border-gray-300">
            <img src={logo} alt="Chef Claude Logo" className="h-16" />
        </div>
    );
}