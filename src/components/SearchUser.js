import React, { Component } from 'react'

export class SearchUser extends Component {
    state ={
      Search:'find a member....'
    }
    handleInput=(e)=>{
        this.setState(
            {
                search:e.target
            }
        )
    }

    //SearchDtata=(e)=>{
       // e.preventDefault
        //alert(1)
    //}
    render() {
        return (
           <form>
                         <div class="input-group">
  <div class="form-outline">
    <input onChange={this.handleInput} placeholder="find a member..." id="search" class="form-control"  />
  </div>
  <button type="button" class="btn btn-warning btn-block">Search</button>
</div>
            </form>
   
       
         
        )
    }
}

export default SearchUser
