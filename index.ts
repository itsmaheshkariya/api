/**
 * @author Mahesh Kariya
 * @description Promise based HTTP client for the browser and Deno. ༼ つ ◕_◕ ༽つ
 * @email maheshkareeya@gmail.com
 * @contact +91 7066650006
 * @since 2020
 * @access public
 * @class
*/
class Axios {
    constructor(){

    }
    /**
     * @description Get Api For fetching data from url ༼ つ ◕_◕ ༽つ
     * @method GET
     * @param {val}  any   URL.
     * @return {commits} JSON.
    */
    async get(val:any){
        let response = await fetch(val);
        let commits = await response.json();
        return commits
    }
    /**
     * @description Get Api For fetching data from url ༼ つ ◕_◕ ༽つ
     * @method GET
     * @param {val}  any   URL.
     * @return {commits} JSON (Single entity).
    */
    async getone(val:any,id:any){
        let response;
        if(val.endsWith("/") === true){
            response = await fetch(val+id);}
        else{
            response = await fetch(val+'/'+id);}
        let commits = await response.json();
        return commits.data
    }
    /**
     * @description Get Api For fetching data from url ༼ つ ◕_◕ ༽つ
     * @method DELETE
     * @param {val}  any   URL.
     * @return {commits} JSON (Deleted entity i.e. empty).
    */
    async delete(val:any){
        let response = await fetch(val, {
        method: 'DELETE',
        })
        let commits = await response.json();
        return commits

    }
    /**
     * @description POST Api For sending data to url ༼ つ ◕_◕ ༽つ
     * @method POST
     * @param {val}  any   URL.
     * @param {data}  object   {}.
     * @return {commits} JSON (Same entity that you just send).
    */
    async post (url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }
    /**
     * @description POST Api For sending data to url ༼ つ ◕_◕ ༽つ
     * @method PUT
     * @param {val}  any   URL.
     * @param {data}  object   {}.
     * @return {commits} JSON (Updated entity).
    */
      async put (url = '', data = {}){
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }

}
let api:any;
export default api = new Axios(); // Inspired by Axios ༼ つ ◕_◕ ༽つ