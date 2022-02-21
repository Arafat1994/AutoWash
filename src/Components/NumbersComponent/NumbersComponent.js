import React, { useLayoutEffect, useState } from 'react';
import './NumbersComponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';

export default function NumbersComponent() {


    const [randomNum, SetrandomNum] = useState(null);
    const [customerNumDiv, SetNumberDiv] = useState(null);

    const data = useSelector((state) => state.datareducer.data.CustomerNumbers);

    useLayoutEffect(() => {
        const getrandomnum = (minval, maxval) => {
            var min = minval;
            var max = maxval;
            function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
            var interval = setInterval(run, 100);
            function run() {
                min = getRandomInt(min + 1, max);
                SetrandomNum(min);
                if (min === max) { clearInterval(interval); SetrandomNum(null) }
            }
        }

        var observer = new IntersectionObserver(function (entries) {
            // isIntersecting is true when element and viewport are overlapping
            // isIntersecting is false when element and viewport don't overlap
            if (entries[0].isIntersecting === true) getrandomnum(5, 5000);
        },
            { threshold: [0] });
        observer.observe(document.querySelector(".NumberContainer"));

    }, [])


    //let returndata = data[0].CustomerNumbers;

    useLayoutEffect(() => {
        SetNumberDiv(
            data?.map((res) => {
                const { id, icon, number, details } = res;
                return (
                    <div key={id} className='numberdiv'>
                        <div className='icondiv'> <FontAwesomeIcon className='icon' icon={icon} />  </div>
                        <div className='details'>
                            <p> {randomNum ? randomNum : number}  +  </p>
                            <p> {details}  </p>
                        </div>
                    </div>
                )
            })
        )
    }, [data, randomNum])


    return (
        <div className='NumberContainer'>
            {
                customerNumDiv
            }

        </div>
    )
}