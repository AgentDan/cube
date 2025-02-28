import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "cube",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "var1 h=2500mm.",
                def: [
                    {file: "awingDefoult"},
                    {file: "awingVar1Defoult1"},
                    {file: "awingVar1Defoult2"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "awingWallOne", file: "awingWallOne", check: true},
                    {id: v1(), groupElements: 0, name: "awingWallTwo", file: "awingWallTwo", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "var2 h=3000mm.",
                def: [
                    {file: "awingDefoult"},
                    {file: "awingVar2Defoult1"},
                    {file: "awingVar2Defoult2"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "awingWallOne", file: "awingWallOne", check: true},
                    {id: v1(), groupElements: 0, name: "awingWallTwo", file: "awingWallTwo", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "var3",
                def: [
                    {file: "awingDefoult"},
                    {file: "awingVar3Defoult1"},
                    {file: "awingVar3Defoult2"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "awingWallOne", file: "awingWallOne", check: true},
                    {id: v1(), groupElements: 0, name: "awingWallTwo", file: "awingWallTwo", check: false},
                ]
            }
        ]
    },
]