import uniqid from 'uniqid'
const initialState = [
    {
        id: uniqid(),
        title: 'DoLaundry!',
        description: 'Heh',
        tags: [
            {
                id: uniqid(),
                tagName: 'work',
                color: '#F2994A'
            }
        ],
        pomoDuration: 5,
        pomoDone: 1,
    },
    {
        id: uniqid(),
        title: 'DoLaundry!',
        description: 'Heh',
        tags: [
            {
                id: uniqid(),
                tagName: 'work',
                color: '#F2994A'
            }
        ],
        pomoDuration: 5,
        pomoDone: 1,
    },
    {
        id: uniqid(),
        title: 'DoLaundry!',
        description: 'Heh',
        tags: [
            {
                id: uniqid(),
                tagName: 'work',
                color: '#F2994A'
            }
        ],
        pomoDuration: 5,
        pomoDone: 1,
    },
    {
        id: uniqid(),
        title: 'DoLaundry!',
        description: 'Heh',
        tags: [
            {
                id: uniqid(),
                tagName: 'work',
                color: '#F2994A'
            }
        ],
        pomoDuration: 5,
        pomoDone: 1,
    },
    {
        id: uniqid(),
        title: 'DoLaundry!',
        description: 'Heh',
        tags: [
            {
                id: uniqid(),
                tagName: 'work',
                color: '#F2994A'
            }
        ],
        pomoDuration: 5,
        pomoDone: 0,
        project: {
            title: 'School',
            color: '#F2994A'
        }
    }
]

function todos(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default todos