import './Footer.scss';

const Footer = () => {
    return (
        <footer className='container_footer'>
            <ul className='container_footer_list'>
                <li className='container_footer_list_item'>
                    <a href="">© 2023</a>
                </li>
                <li className='container_footer_list_item'>
                    <a href="">Twitter</a>
                </li>
                <li className='container_footer_list_item'>
                    <a href="">LinkedIn</a>
                </li>
                <li className='container_footer_list_item'>
                    <a href="">Email</a>
                </li>
                <li className='container_footer_list_item'>
                    <a href="">RSS feed</a>
                </li>
                <li className='container_footer_list_item'>
                    <a href="">Add to Feedly</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;