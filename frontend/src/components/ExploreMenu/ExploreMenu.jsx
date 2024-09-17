import { menu_list } from '../../assets/assets';
import './ExploreMenu.css';

function ExploreMenu({category,setCategory}){

    return(
        <div className='explore-menu' id='explore-menu'>
           <h1>Explore Our Menu</h1>
           <p className='explorer-menu-text'>Choose from a diverse menu featuring a delectable array of dishes.Our mission is to satisfy your cravings and elevate your dinning experience,one dish at a time. </p>
           
           <div className="explore-menu-list">
              {
                menu_list.map((item,index)=>{
                    return(
                      <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} className="explore-menu-list-item">
                         <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                         <p>{item.menu_name}</p>
                      </div>
                    )

                })
              }
           </div>
           <hr />
        
        </div>
    )
}
export default ExploreMenu;