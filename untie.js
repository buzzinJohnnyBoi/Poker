    function Untie(arr1, arr2, max, tie) {
//pinwheel straight
        if (max <= 1) {
            if (findvalue(arr1[1], [0]) > findvalue(arr2[1], [0])) {
                return arr1;
            }
            else if (findvalue(arr1[1], [0]) < findvalue(arr2[1], [0])) {
                return arr2;
            }
            else {
                if (findvalue(arr1[1], [1]) < findvalue(arr2[1], [1])) {
                    return arr2;
                }   
                else if (findvalue(arr1[1], [1]) > findvalue(arr2[1], [1])) {
                    return arr1;  
                } 
                else {
                    if (findvalue(arr1[1], [2]) < findvalue(arr2[1], [2])) {
                        return arr2;
                    }   
                    else if (findvalue(arr1[1], [2]) > findvalue(arr2[1], [2])) {
                        return arr1;
                    } 
                    else {
                        if (findvalue(arr1[1], [3]) < findvalue(arr2[1], [3])) {
                            return arr2;
                        }   
                        else if (findvalue(arr1[1], [3]) > findvalue(arr2[1], [3])) {
                            return arr1;
                        } 
                        else {
                            if (tie) {return "tie";}
                            return arr1;
                        }
                    }
                }
            }
        }
//pair

        if (max > 1 && max <= 2) {
            if (findvalue(arr1[1], [0]) > findvalue(arr2[1], [0])) {
                return arr1;
            }
            else if (findvalue(arr1[1], [0]) < findvalue(arr2[1], [0])) {
                return arr2;
            }
            else {
                if (findvalue(arr1[1], [1]) < findvalue(arr2[1], [1])) {
                    return arr2;
                }   
                else if (findvalue(arr1[1], [1]) > findvalue(arr2[1], [1])) {
                    return arr1;  
                } 
                else {
                    if (findvalue(arr1[1], [2]) < findvalue(arr2[1], [2])) {
                        return arr2;
                    }   
                    else if (findvalue(arr1[1], [2]) > findvalue(arr2[1], [2])) {
                        return arr1;
                    } 
                    else {
                        if (tie) {return "tie";}
                        return arr1;
                    }
                }
            }
        }
//2 pair

        if (max > 2 && max <= 3) {
            if (arr1[1] > arr2[1]) {
                return arr1;
            }
            else if (arr1[1] < arr2[1]) {
                return arr2;
            }
            else {
                if (findvalue(arr1, 2) > findvalue(arr2, 2)) {
                    return arr1;
                }
                else if (findvalue(arr1, 2) < findvalue(arr2, 2)) {
                    return arr2;
                }
                else {
                    
                    if (tie) {return "tie";}
                    return arr1;
                }           
            }
        }

//3 o kind

        if (max > 3 && max <= 4) {
            if (findvalue(arr1[1], [0]) > findvalue(arr2[1], [0])) {
                return arr1;
            }
            else if (findvalue(arr1[1], [0]) < findvalue(arr2[1], [0])) {
                return arr2;
            }
            else {
                if (findvalue(arr1[1], [1]) < findvalue(arr2[1], [1])) {
                    return arr2;
                }   
                else if (findvalue(arr1[1], [1]) > findvalue(arr2[1], [1])) {
                    return arr1;  
                } 
                else {
                    if (tie) {return "tie";}
                    return arr1;
                }
            }
        }

// straight

    if (max > 4 && max <= 5) {
        if (arr2[4] > arr1[4]) {
        return arr2;
        }
        if (arr2[4] < arr1[4]) {
        return arr1;
        }
        if (tie) { return "tie";}
        return arr1;
    }

//flush

    if (max > 5 && max <= 6) {
            if (findvalue(arr1[1], 0) > findvalue(arr2[1], 0)) {
                return arr1;
            }
            else if (findvalue(arr1[1], [0]) < findvalue(arr2[1], [0])) {
                return arr2;
            }
            else {

                if (findvalue(arr1[1], 1) < findvalue(arr2[1], 1)) {
                    return arr2;
                }   
                else if (findvalue(arr1[1], 1) > findvalue(arr2[1], 1)) {
                    return arr1;  
                } 

                else {
                    if (findvalue(arr1[1], 2) < findvalue(arr2[1], 2)) {
                        return arr2;
                    }   
                    else if (findvalue(arr1[1], 2) > findvalue(arr2[1], 2)) {
                        return arr1;
                    } 
                    else {

                        if (findvalue(arr1[1], 3) < findvalue(arr2[1], 3)) {
                            return arr2;
                        }   
                        else if (findvalue(arr1[1], 3) > findvalue(arr2[1], 3)) {
                            return arr1;
                        } 
                        else {

                            if (tie) {return "tie";}
                            return arr1;
                        }
                    }
                }
            }
    }
//full house
    if (max > 6 && max <= 7) {
            if (arr1[1] > arr2[1]) {
                return arr1;
            }
            else if (arr1[1] < arr2[1]) {
                return arr2;
            }
            else {
                if (tie) {return "tie";}
                return arr1;
            }
    }
//quads
    if (max > 7 && max <= 8) {
        if (findvalue(arr1, [1]) > findvalue(arr2, [1])) {
            return arr1;
        }
        else if (findvalue(arr1, [1]) < findvalue(arr2, [1])) {
            return arr2;
        }
        else {
            if (tie) {return "tie";}
            return arr1;
        }
    }
//straight flush


if (max > 8 && max <= 9) {
        if (arr2[4] > arr1[4]) {
        return arr2;
        }
        if (arr2[4] < arr1[4]) {
        return arr1;
        }
        if (tie) {return "tie";}
        return arr1;
    }

    if (max > 9) {
        if (tie) {return "tie";}
        return arr1;
}
}