import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "cube",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "Lavoro",
                def: [
                    {file: "defoult1"},
                    {file: "defoult2"},
                    {file: "defoult3"},
                    {file: "defoult4"},
                    {file: "defoult5"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "ceiling", file: "ceiling1", check: true},
                    {id: v1(), groupElements: 0, name: "without ceiling", file: "ceiling2", check: false},
                    {id: v1(), groupElements: 1, name: "windows", file: "windows1", check: true},
                    {id: v1(), groupElements: 1, name: "without windows", file: "windows2", check: false},
                    {id: v1(), groupElements: 2, name: "wall", file: "wall1", check: true},
                    {id: v1(), groupElements: 2, name: "without wall", file: "wall2", check: false},
                ]
            },
        ]
    },
]