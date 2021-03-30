import React, { Component } from 'react'
import adil from"./adil.PNG";
import salbipic from"./salbipic.PNG";
import yasser from "./yasser.PNG";
import Alami from "./Alami.PNG";
import saiko from "./saiko.PNG";
import kamal from "./kamal.PNG";
import tanjawi from "./tanjawi.jpg";
import benyazid from "./benyazid.PNG";
import salah from "./salah.jpg";
import axios from 'axios'
import SearchUser from './SearchUser';
export class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Users:[{
                login: "Mohamed salbi",
                id: 1,
                src: salbipic,
                github_url : "https://github.com/vulture990",
                facebbok_url : "https://web.facebook.com/martin.phoenix.372",
                discord  :"vulturex99"
             },
              {
                login: "Yasser ouaziz",
                id: 2,
                src:yasser,
                github_url : " https://github.com/thug875d",
                facebbok_url : "https://web.facebook.com/yasser.ouaaziz.7/",
                discord  :"yashéro"
            
              },
              
              {
                login: "Adil dahani",
                id: 3,
                src:adil,
                github_url : "https://github.com/dahani9091",
                facebbok_url : "https://web.facebook.com/adil.dahanii",
                discord  :"adil"
              },
              {
                login: "Oussama Alami",
                id: 4,
                src:Alami,
                github_url : "https://github.com/vulture990",
                facebbok_url : "https://web.facebook.com/martin.phoenix.372",
                discord  :"vulturex99"
             },
             {
                login: "YahyaBnekacha",
                id: 5,
                src:saiko,
                github_url : "https://github.com/Saikonohero1",
                facebbok_url : "https://web.facebook.com/martin.phoenix.372",
                discord  :"Saikonohero"},
                {
                    login: "Kamal Lahouir",
                    id: 2,
                    src:kamal,
                    github_url : "https://github.com/Kamal-Lahouir",
                    facebbok_url : "https://www.facebook.com/Lahouir.Kamal",
                    discord  :"yashéro"
                
                  },
                  {
                    login: " Salah eddine", 
                    id: 2,
                    src:salah,
                    github_url : "https://github.com/Kamal-Lahouir",
                    facebbok_url : "https://web.facebook.com/yasser.ouaaziz.7/",
                    discord  :"yashéro"
                
                  },
                  {
                    login: "Abdelali OUadi",
                    id: 1,
                    src: tanjawi,
                    github_url : "https://github.com/vulture990",
                    facebbok_url : "https://web.facebook.com/TanjawiLad",
                    discord  :"TANJAWILAD"},
                    {
                      login: "Hamza Benyazid ",
                      id: 1,
                      src: benyazid,
                      github_url : "https://github.com/vulture990",
                      facebbok_url : "https://web.facebook.com/TanjawiLad",
                      discord  :"TANJAWILAD"},
            ]
                 

        }
    }
    
    render() {
        return (
     
            <div>
            <div className="row" my-2>
              <div className="col-md-12">
                <SearchUser/>
              </div>
              <div>

              </div>
                 <div class="row">
                     
                    
               
                {this.state.Users.map(user=>(
                    <div className="col-md-4">
                <div class="card">
                     
                               <img class="card-img-top" src={user.src} alt=""/>
                    <div class="card-body">
                        <h4 class="card-title">{user.login}</h4>
                        <p class="card-text">
                        <a href={user.github_url} className="btn btn-success">git_hub</a>
                        <a href={user.facebbok_url} className="btn btn-warning">contact_me</a>
                        </p>
                      
                    </div>
                        </div>
             
                </div>))
            }
            </div>
                
            </div>

</div>
 
        )
    }
}

export default Users
