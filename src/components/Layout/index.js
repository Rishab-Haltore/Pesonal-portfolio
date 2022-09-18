import Sidebar from '../Sidebar';
import './index.scss'
import { Outlet } from 'react-router-dom';

const Layout = () =>{

return (
<div className="App">
<Sidebar/>


<div className='page'>
<span className='tage top-tags'>&lt;body&gt;</span>


<Outlet/>

<span className='tags bottom-tags'>

    &lt;/body&gt;
</span>

<br/>

<span classname = 'bottom-tag-html'>&lt;/html&gt;

</span>


</div>
</div>


) 


}

export default Layout; 