import React from 'react'
import PomoCard from "./PomoCard"
import {PomosContainer} from "./styles"

const DayPomos = () => {
    return (
        <PomosContainer>
            <PomoCard project={{title: "My1Project", color: "#F2994A"}} title={"Pomo is done!"} done={7} outOf={7}
                      timeStarted={"17:12"} timeEnded={"17:45"} />
            <PomoCard project={{title: "My1Project", color: "#F2994A"}} title={"Pomo is done!"} done={5} outOf={7}
                      timeStarted={"17:12"} timeEnded={"17:45"} />
            <PomoCard project={{title: "My1Project", color: "#F2994A"}} title={"Pomo is done!"} done={5} outOf={7}
                      timeStarted={"17:12"} timeEnded={"17:45"} />
            <PomoCard project={{title: "My1Project", color: "#F2994A"}} title={"Pomo is done!"} done={5} outOf={7}
                      timeStarted={"17:12"} timeEnded={"17:45"} />
            <PomoCard project={{title: "My1Project", color: "#F2994A"}} title={"Pomo is done!"} done={5} outOf={7}
                      timeStarted={"17:12"} timeEnded={"17:45"} />
            <PomoCard project={{title: "My1Project", color: "#F2994A"}} title={"Pomo is done!"} done={5} outOf={7}
                      timeStarted={"17:12"} timeEnded={"17:45"} />

        </PomosContainer>
    )
}

export default DayPomos