import {Pipe} from "angular2/core"

@Pipe({
    name:"percentage"
})
export class percentagePipe {
    transform(value){
        return value + "%";        
    }
}