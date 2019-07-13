
// 4xmen under GPL-3 License 
// import modules

class CreatePeopleTable extends Migration {
    up (){

    }
    
    down(){
        Schema::drop('flights');
    }
}
    