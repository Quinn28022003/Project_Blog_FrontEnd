import React, { useContext } from 'react';
import './Title.scss';
import { contextApp, TContextApp } from '../../App';

type TTitle = {
    title: string;
};

const Title: React.FC<TTitle> = ({ title }: TTitle) => {
    const dataContextApp: TContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    return (
        <div className={`container_title ${isCheckTheme === true ? 'chageDark' : 'chageBright'}`}>
            <h2>
                {title}
            </h2>
        </div>
    );
};

export default Title;