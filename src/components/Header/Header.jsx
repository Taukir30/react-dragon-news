import React from 'react';
import MyContainer from '../MyContainer/MyContainer';
import headerLogo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <header className='my-5 py-5'>
            <MyContainer className={'flex flex-col gap-3 justify-center items-center'}>
                <img className='w-[400px]' src={headerLogo} alt="" />
                <p className='text-base text-accent '>Journalism Without Fear or Favour</p>
                <p className='font-semibold text-accent'>
                    {
                        format( new Date(), "EEEE, MMMM MM, yyyy" )
                    }
                </p>
            </MyContainer>
        </header>
    );
};

export default Header;