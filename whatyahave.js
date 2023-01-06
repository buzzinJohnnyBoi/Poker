function whatYouHave(hand) {
        var RF = Royal_flush(hand);
        var SF = Straight_flush(hand);
        var FK = Four_of_a_kind(hand);
        var FH = Full_house(hand);
        var FL = Flush(hand);
        var ST = Straight(hand);
        var TK = Three_of_a_kind(hand);
        var TP = Two_pair(hand);
        var OK = Pair(hand);
        var HC = High_Card(hand);

        if(RF != 0) {return RF;}
        if(SF != 0) {return SF;}
        if(FK != 0) {return FK;}
        if(FH != 0) {return FH;}
        if(FL != 0) {return FL;}
        if(ST != 0) {return ST;}
        if(TK != 0) {return TK;}
        if(TP != 0) {return TP;}
        if(OK != 0) {return OK;}
        if(HC != 0) {return HC;}
    }

    function High_Card(hand) {
        var perfect;
        while(!perfect) {
            perfect = true;
            for (var i = 0; i < hand.length - 1; i++) {
                if (findvalue(hand, i) > findvalue(hand, i + 1)) {
                    let placeholder = hand[i];
                    hand[i] = hand[i + 1];
                    hand[i + 1] = placeholder;
                    perfect = false;
                }
            }
        }
        return [(findvalue(hand, 4) / 14) + 0, HighestTolowest([hand[0], hand[1], hand[2], hand[3]])];
    }

    function Pair(hand) {
        if (findvalue(hand, 0) == findvalue(hand, 1)) {return [(findvalue(hand, 0) / 14) + 1, HighestTolowest([hand[4], hand[2], hand[3]])];}
        if (findvalue(hand, 0) == findvalue(hand, 2)) {return [(findvalue(hand, 0) / 14) + 1, HighestTolowest([hand[1], hand[4], hand[3]])];}
        if (findvalue(hand, 0) == findvalue(hand, 3)) {return [(findvalue(hand, 0) / 14) + 1, HighestTolowest([hand[1], hand[2], hand[4]])];}
        if (findvalue(hand, 0) == findvalue(hand, 4)) {return [(findvalue(hand, 0) / 14) + 1, HighestTolowest([hand[1], hand[2], hand[3]])];}
        if (findvalue(hand, 1) == findvalue(hand, 2)) {return [(findvalue(hand, 1) / 14) + 1, HighestTolowest([hand[0], hand[3], hand[4]])];}
        if (findvalue(hand, 1) == findvalue(hand, 3)) {return [(findvalue(hand, 1) / 14) + 1, HighestTolowest([hand[0], hand[2], hand[4]])];}
        
        if (findvalue(hand, 1) == findvalue(hand, 4)) {return [(findvalue(hand, 1) / 14) + 1, HighestTolowest([hand[0], hand[2], hand[3]])];}
        if (findvalue(hand, 2) == findvalue(hand, 3)) {return [(findvalue(hand, 2) / 14) + 1, HighestTolowest([hand[0], hand[4], hand[1]])];}
        if (findvalue(hand, 2) == findvalue(hand, 4)) {return [(findvalue(hand, 2) / 14) + 1, HighestTolowest([hand[0], hand[1], hand[3]])];}
        if (findvalue(hand, 3) == findvalue(hand, 4)) {return [(findvalue(hand, 3) / 14) + 1, HighestTolowest([hand[0], hand[2], hand[1]])];}
        return 0;
    }

    function Two_pair(hand) {
        var card0 = findvalue(hand, 0);
        var card1 = findvalue(hand, 1);
        var card2 = findvalue(hand, 2);
        var card3 = findvalue(hand, 3);
        var card4 = findvalue(hand, 4);

        if (card0 == card1 && card2 == card3) {if (card0 > card2) {return [(card0 / 14) + 2, (card2 / 14) + 2,  hand[4]]} return [(card2 / 14) + 2, (card0 / 14) + 2, hand[4]] }
        if (card0 == card1 && card2 == card4) {if (card0 > card2) {return [(card0 / 14) + 2, (card2 / 14) + 2,  hand[3]]} return [(card2 / 14) + 2, (card0 / 14) + 2, hand[3]] }
        if (card0 == card1 && card3 == card4) {if (card0 > card3) {return [(card0 / 14) + 2, (card3 / 14) + 2,  hand[2]]} return [(card3 / 14) + 2, (card0 / 14) + 2, hand[2]] }

        if (card0 == card2 && card3 == card4) {if (card0 > card3) {return [(card0 / 14) + 2, (card3 / 14) + 2,  hand[1]]} return [(card3 / 14) + 2, (card0 / 14) + 2, hand[1]] }
        if (card0 == card2 && card1 == card3) {if (card0 > card3) {return [(card0 / 14) + 2, (card3 / 14) + 2,  hand[4]]} return [(card3 / 14) + 2, (card0 / 14) + 2, hand[4]] }
        if (card0 == card2 && card1 == card4) {if (card0 > card4) {return [(card0 / 14) + 2, (card4 / 14) + 2,  hand[3]]} return [(card4 / 14) + 2, (card0 / 14) + 2, hand[3]] }

        if (card0 == card3 && card1 == card2) {if (card0 > card2) {return [(card0 / 14) + 2, (card2 / 14) + 2,  hand[4]]} return [(card2 / 14) + 2, (card0 / 14) + 2, hand[4]] }
        if (card0 == card3 && card1 == card4) {if (card0 > card1) {return [(card0 / 14) + 2, (card1 / 14) + 2,  hand[2]]} return [(card1 / 14) + 2, (card0 / 14) + 2, hand[2]] }
        if (card0 == card3 && card2 == card4) {if (card0 > card2) {return [(card0 / 14) + 2, (card2 / 14) + 2,  hand[1]]} return [(card2 / 14) + 2, (card0 / 14) + 2, hand[1]] }

        if (card0 == card4 && card1 == card2) {if (card0 > card2) {return [(card0 / 14) + 2, (card2 / 14) + 2,  hand[3]]} return [(card2 / 14) + 2, (card0 / 14) + 2, hand[3]] }
        if (card0 == card4 && card1 == card3) {if (card0 > card3) {return [(card0 / 14) + 2, (card3 / 14) + 2,  hand[2]]} return [(card3 / 14) + 2, (card0 / 14) + 2, hand[2]] }
        if (card0 == card4 && card2 == card3) {if (card0 > card3) {return [(card0 / 14) + 2, (card3 / 14) + 2,  hand[1]]} return [(card3 / 14) + 2, (card0 / 14) + 2, hand[1]] }

        if (card1 == card2 && card3 == card4) {if (card1 > card3) {return [(card0 / 14) + 2, (card3 / 14) + 2,  hand[0]]} return [(card3 / 14) + 2, (card0 / 14) + 2, hand[0]] }
        if (card1 == card3 && card2 == card4) {if (card1 > card2) {return [(card0 / 14) + 2, (card2 / 14) + 2,  hand[0]]} return [(card2 / 14) + 2, (card0 / 14) + 2, hand[0]] }
        if (card1 == card4 && card2 == card3) {if (card1 > card2) {return [(card0 / 14) + 2, (card2 / 14) + 2,  hand[0]]} return [(card2 / 14) + 2, (card0 / 14) + 2, hand[0]] }

        return 0;
    }

    function Three_of_a_kind(hand) {
        var card0 = findvalue(hand, 0);
        var card1 = findvalue(hand, 1);
        var card2 = findvalue(hand, 2);
        var card3 = findvalue(hand, 3);
        var card4 = findvalue(hand, 4);

        if (card0 == card1 && card0 == card2) {return [(card0 / 14 + 3), HighestTolowest([hand[3], hand[4]])]}
        if (card0 == card1 && card0 == card3) {return [(card0 / 14 + 3), HighestTolowest([hand[2], hand[4]])]}
        if (card0 == card1 && card0 == card4) {return [(card0 / 14 + 3), HighestTolowest([hand[2], hand[3]])]}

        if (card0 == card2 && card0 == card3) {return [(card0 / 14 + 3), HighestTolowest([hand[1], hand[4]])]}
        if (card0 == card2 && card0 == card4) {return [(card0 / 14 + 3), HighestTolowest([hand[1], hand[3]])]}

        if (card0 == card3 && card0 == card4) {return [(card0 / 14 + 3), HighestTolowest([hand[1], hand[2]])]}


        if (card1 == card2 && card1 == card3) {return [(card1 / 14 + 3), HighestTolowest([hand[0], hand[4]])]}
        if (card1 == card2 && card1 == card4) {return [(card1 / 14 + 3), HighestTolowest([hand[0], hand[3]])]}

        if (card1 == card3 && card1 == card4) {return [(card1 / 14 + 3), HighestTolowest([hand[0], hand[2]])]}


        if (card2 == card3 && card2 == card4) {return [(card2 / 14 + 3), HighestTolowest([hand[0], hand[1]])]}
        return 0;
    }

    function Straight(hand) {
        var perfect;
        var straight = true;
        while(!perfect) {
            perfect = true;
            for (var i = 0; i < hand.length - 1; i++) {
                if (findvalue(hand, i) > findvalue(hand, i + 1)) {
                    let placeholder = hand[i];
                    hand[i] = hand[i + 1];
                    hand[i + 1] = placeholder;
                    perfect = false;
                }
            }
        }

        for (var i = findvalue(hand, 0); i < (hand.length + findvalue(hand, 0)); i++) {
            if(findvalue(hand, i - findvalue(hand, 0)) == i) {

            }
            else {
                straight = false;
            }
        }
        if (findvalue(hand, 4) == 14) {
            if (findvalue(hand, 0) == 2 && findvalue(hand, 1) == 3 && findvalue(hand, 2) == 4 && findvalue(hand, 3) == 5) {return [(findvalue(hand, 3) / 14 + 4)];}
        }
        if (straight == true) {return [(findvalue(hand, 4) / 14 + 4)];}
        return 0;
    }

    function Flush(hand) {
        var perfect;
        while(!perfect) {
            perfect = true;
            for (var i = 0; i < hand.length - 1; i++) {
                if (findvalue(hand, i) > findvalue(hand, i + 1)) {
                    let placeholder = hand[i];
                    hand[i] = hand[i + 1];
                    hand[i + 1] = placeholder;
                    perfect = false;
                }
            }
        }
        if (findsuit(hand[0]) == findsuit(hand[1]) && findsuit(hand[0]) == findsuit(hand[2]) && findsuit(hand[0]) == findsuit(hand[3]) && findsuit(hand[0]) == findsuit(hand[4])) {
            return [(findvalue(hand, 4) / 14) + 5, HighestTolowest([hand[3], hand[2], hand[1], hand[0]])]
        }

        return 0;
    }


    function Full_house(hand) {
        var card0 = findvalue(hand, 0);
        var card1 = findvalue(hand, 1);
        var card2 = findvalue(hand, 2);
        var card3 = findvalue(hand, 3);
        var card4 = findvalue(hand, 4);

        if (card0 == card1 && card0 == card2 && card3 == card4) {return [(card0 / 14) + 6, (card3 / 14) + 6]}
        if (card0 == card1 && card0 == card3 && card2 == card4) {return [(card0 / 14) + 6, (card2 / 14) + 6]}
        if (card0 == card1 && card0 == card4 && card2 == card3) {return [(card0 / 14) + 6, (card2 / 14) + 6]}

        if (card0 == card2 && card0 == card3 && card1 == card4) {return [(card0 / 14) + 6, (card4 / 14) + 6]}
        if (card0 == card2 && card0 == card4 && card1 == card3) {return [(card0 / 14) + 6, (card3 / 14) + 6]}

        if (card0 == card3 && card0 == card4 && card2 == card1) {return [(card0 / 14) + 6, (card1 / 14) + 6]}


        if (card1 == card2 && card1 == card3 && card0 == card4) {return [(card1 / 14) + 6, (card4 / 14) + 6]}
        if (card1 == card2 && card1 == card4 && card0 == card3) {return [(card1 / 14) + 6, (card3 / 14) + 6]}

        if (card1 == card3 && card1 == card4 && card0 == card2) {return [(card1 / 14) + 6, (card2 / 14) + 6]}


        if (card2 == card3 && card2 == card4 && card0 == card1) {return [(card2 / 14) + 6, (card1 / 14) + 6]}

        return 0;
    }

    function Four_of_a_kind(hand) {
        var card0 = findvalue(hand, 0);
        var card1 = findvalue(hand, 1);
        var card2 = findvalue(hand, 2);
        var card3 = findvalue(hand, 3);
        var card4 = findvalue(hand, 4);

        if (card0 == card1 && card0 == card2 && card0 == card3) {return [(card0 / 14 + 7), hand[4]] }
        if (card0 == card1 && card0 == card2 && card0 == card4) {return [(card0 / 14 + 7), hand[3]] }
        if (card0 == card1 && card0 == card3 && card0 == card4) {return [(card0 / 14 + 7), hand[2]] }

        if (card0 == card2 && card0 == card3 && card0 == card4) {return [(card0 / 14 + 7), hand[1]] }
        if (card1 == card2 && card1 == card4 && card1 == card3) {return [(card1 / 14 + 7), hand[0]] }

        return 0;
    }

    function Straight_flush(hand) {
        var perfect;
        var straight = true;
        while(!perfect) {
            perfect = true;
            for (var i = 0; i < hand.length - 1; i++) {
                if (findvalue(hand, i) > findvalue(hand, i + 1)) {
                    let placeholder = hand[i];
                    hand[i] = hand[i + 1];
                    hand[i + 1] = placeholder;
                    perfect = false;
                }
            }
        }

        for (var i = findvalue(hand, 0); i < (hand.length + findvalue(hand, 0)); i++) {
            if(findvalue(hand, i - findvalue(hand, 0)) == i) {

            }
            else {
                straight = false;
            }
        }
        if (findvalue(hand, 0) == 2 && findvalue(hand, 1) == 3 && findvalue(hand, 2) == 4 && findvalue(hand, 3) == 5) {
            if (findsuit(hand[0]) == findsuit(hand[1]) && findsuit(hand[0]) == findsuit(hand[2]) && findsuit(hand[0]) == findsuit(hand[3]) && findsuit(hand[0]) == findsuit(hand[4])) {
                return [(findvalue(hand, 3) / 14 + 8)];
            }
        }

        if (straight == true) {if (findsuit(hand[0]) == findsuit(hand[1]) && findsuit(hand[0]) == findsuit(hand[2]) && findsuit(hand[0]) == findsuit(hand[3]) && findsuit(hand[0]) == findsuit(hand[4])) {return [(findvalue(hand, 4) / 14) + 8];}}
        return 0;
    }

        function Royal_flush(hand) {
        var perfect;
        var straight = true;
        while(!perfect) {
            perfect = true;
            for (var i = 0; i < hand.length - 1; i++) {
                if (findvalue(hand, i) > findvalue(hand, i + 1)) {
                    let placeholder = hand[i];
                    hand[i] = hand[i + 1];
                    hand[i + 1] = placeholder;
                    perfect = false;
                }
            }
        }

        for (var i = findvalue(hand, 0); i < (hand.length + findvalue(hand, 0)); i++) {
            if(findvalue(hand, i - findvalue(hand, 0)) == i) {

            }
            else {
                straight = false;
            }
        }
        if (straight == true) {if (findsuit(hand[0]) == findsuit(hand[1]) && findsuit(hand[0]) == findsuit(hand[2]) && findsuit(hand[0]) == findsuit(hand[3]) && findsuit(hand[0]) == findsuit(hand[4]) && findvalue(hand, 0) == 10) {
            return [(findvalue(hand, 4) / 14 + 9)]}
        }
        return 0;
    }