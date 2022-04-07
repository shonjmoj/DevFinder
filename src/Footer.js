import {BsTwitter} from 'react-icons/bs'

const Footer = (props) => {
    return (
        <div className='flex flex-col items-center justify-center m-6 text-md font-extralight'>
            <h3 className='p-2 font-extralight'>Made by <span className='font-normal'>Shonjmoj</span></h3>
            <div className='flex'>
                <a href="https://github.com/miid0" className='hover:rotate-6 transition-all duration-500'>
                    <props.icon size={20} className={'mx-2 cursor-pointer'}/>
                </a>
                <a href="https://twitter.com/ouaaa77" className='hover:-rotate-6 transition-all duration-500'>
                    <BsTwitter size={20} className={'mx-2 cursor-pointer'}/>
                </a>
            </div>
        </div>
    );
}
 
export default Footer;