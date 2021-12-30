

export default function DropDownReducer(state, action) {
    if (action.type === 'Home') { return { dropdownele: [] } }
    if (action.type === 'About') { return { dropdownele: [] } }
    if (action.type === 'Service') { return { 
        
        dropdownele: [
        { id: 0, content: ' Car Washing ', class: "DropDownlink", path: "/BlogGrid" },
        { id: 1, content: ' Chaning Oil ', class: "DropDownlink", path: "/DetailPage" }
    ] } }
    if (action.type === 'Price') { return { dropdownele: [] } }
    if (action.type === 'Washing') { return { 
        dropdownele: [
            { id: 0, content: 'yarmook distinct', class: "DropDownlink", path: "/BlogGrid" },
            { id: 1, content: 'Mounsia distinct', class: "DropDownlink", path: "/DetailPage" },
            { id: 2, content: 'Kalij distinct', class: "DropDownlink", path: "/BlogGrid" },
            { id: 3, content: 'Remal distinct', class: "DropDownlink", path: "/DetailPage" }
        ] } }
    if (action.type === 'Pages') {
        return {
            dropdownele:
                [{ id: 0, content: 'Blog Grid', class: "DropDownlink", path: "/BlogGrid" },
                { id: 1, content: 'Detail Page', class: "DropDownlink", path: "/DetailPage" },
                { id: 2, content: 'Team Member', class: "DropDownlink", path: "/TeamMember" },
                { id: 3, content: 'Schdule Booking', class: "DropDownlink", path: "/SchduleBooking" }]
        }
    }
    if (action.type === 'Contact') { return { dropdownele: [] } }


}