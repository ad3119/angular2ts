import {Pipe} from "angular2/core"

@Pipe({
    name:"status"
})
export class statusPipe {
    transform(value){
        switch (value) {
        	case "0":return "Failed";break;
        	case "1": return "In Progress";break;
        	case "2": return "In Progress";break;
        	case "4": return "Completed";break;
        	default:return "In Progress";break;
        }    
    }
}