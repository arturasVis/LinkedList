function createNode(value,nextNode=null){
    return {
        value,
        nextNode
    }
}

function createLinkedList(head=null){
    return {
        head,
        tail: null,
        size:0,
        append(value){
            const newNode=createNode(value);
            if(this.head===null){
                this.head=newNode;
                this.tail=newNode;
                this.size=1;
            }
            else{
                this.tail.nextNode=newNode;
                this.tail=newNode;
                this.size++;
            }
        },
        prepend(value){
            const newNode=createNode(value);
            if(this.head===null){
                this.head=newNode;
                this.tail=newNode;
                this.size=1;
            }
            else{
                newNode.nextNode=this.head;
                this.head=newNode;
                this.size++;
            }
        },
        returnHead(){
            return this.head;
        },
        returnTail(){
            return this.tail;
        },
        returnSize(){
            return this.size;
        }
    }
}

const list=createLinkedList();

list.append("Lol");
list.append("Bitch");
list.append("It works???");
list.append("What");
list.prepend("Added to begining");
console.log(list);
console.log(list.returnSize());