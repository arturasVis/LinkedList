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
        },
        at(index,node=this.head){
            if(index<this.size&&node.nextNode!=null){
                if(index===0){
                    return node
                }
                index--;
                return this.at(index,node.nextNode);
            }
            else{
                return "Index is out of bounds of the list";
            }
        },
        pop(){
            const newTail=this.at(this.size-2);
            this.tail=newTail;
            this.tail.nextNode=null;
            this.size--;
        },
        contains(value,node=this.head,index=this.size-1){
            if(value===node.value)
            {
                return true;
            }else if(index===0){
                return false;
            }
            return this.contains(value,node.nextNode,index-1);
        },
        find(value,index=0,node=this.head){
            if(index===this.size){
                return null;
            }
            else if(value===node.value){
                return index;
            }
            return this.find(value,index+1,node.nextNode);
        },
        toString(value="",node=this.head){
            if(node===null){
                return value+" null";
            }
            value+=` (${node.value}) =>`
            return this.toString(value,node.nextNode);
        },
        insertAt(value,index,nodeCurrent=this.head,nodePrevious=null){
            if(index===0){
                const newNode=createNode(value,nodeCurrent)
                if(nodePrevious!==null){
                    nodePrevious.nextNode=newNode;
                }
                else{
                    this.prepend(value);
                }
                this.size++;
                return;
            }
            return this.insertAt(value,index-1,nodeCurrent.nextNode,nodeCurrent)
            
        },
        removeAt(index,nodeCurrent=this.head,nodePrevious=null){
            if(index===0){
                const nodeNext=nodeCurrent.nextNode;
                nodeCurrent=nodeNext
                if(nodePrevious!==null){
                    nodePrevious.nextNode=nodeCurrent;
                }
                else{
                    this.head=nodeNext;
                }
                this.size--;
                return
            }
            if(index>this.size-1){
                return "Size out of bounds of array"
            }
            return this.removeAt(index-1,nodeCurrent.nextNode,nodeCurrent);
        }
    }
}
