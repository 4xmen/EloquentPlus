
// 4xmen under GPL-3 License 
// import modules

class CreatebacksTable extends Migration {
    
    up (){
        Schema.create = function(table){
            table.bigIncrements('id');
            table.timestamps();
        }
    }
    
    down(){
        Schema.drop('backs');
    }
}
    