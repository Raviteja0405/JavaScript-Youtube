/*Javascript Execution context
 => Global Execution context -> this
 => Function Execution context
 => Eval Execution context

    Execution
    phase 1: Memory CREATION PHASE
    phase 2: Execution phase
    
    Eg:
        code =>
            let val1 =10
            let val2 =5
            function addNum(num1,num2){
                let total = num1+num2
                return total
            }
            let result1 = addNum(val1, val2)
            let result2 = addNUm(10,2)

    Procedure:
    1) Global Execution/environment
        allocate this
    2) Memory phase
        val1 -> undefined
        val2 -> undefined
        addnum -> definition
        result1->undefined
        result2->undefined
    3) Execution Phase
        val1 <-10
        val2 <-5
        addNum -> { (//new executional context i.e again memory phase and execution phase.)
                    newVariable environment + Execution thread
                  } then this EC gets deleted
    ............

    CALL STACK....

*/