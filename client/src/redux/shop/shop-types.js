const ShopActionTypes = {
    //setting up multiple states that our shop actions could be in as far as fetching the asynchronous data goes   
    FETCH_COLLECTIONS_START:'FETCH_COLLECTIONS_START', //telling redux we are starting to fetch the data i.e that is b4 any data gets fetched. 1st API call to our functions begins
    FETCH_COLLECTIONS_SUCCESS:'FETCH_COLLECTIONS_SUCCESS',//when API call returns successfull. Whne the data that we want is returned.
    FETCH_COLLECTIONS_FAILURE:'FETCH_COLLECTIONS_FAILURE' //e.g when server is down, connection is poor, dont have proper credentials

}

export default ShopActionTypes;