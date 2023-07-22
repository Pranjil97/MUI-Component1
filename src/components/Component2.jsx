import React, { useState } from 'react';
import { Checkbox, Typography, Collapse } from '@mui/material';

const Component2 = () => {
    // Hardcoded department data
    const departmentsData = [
        {
            id: 1,
            name: 'Department A',
            subDepartments: [
                { id: 101, name: 'Sub Department A1' },
                { id: 102, name: 'Sub Department A2' },
            ],
        },
        {
            id: 2,
            name: 'Department B',
            subDepartments: [
                { id: 201, name: 'Sub Department B1' },
                { id: 202, name: 'Sub Department B2' },
            ],
        },
    ];

    // State to manage selected departments and sub-departments
    const [selected, setSelected] = useState([]);

    const isDepartmentSelected = (departmentId) => {
        return selected.includes(departmentId);
    };

    const isSubDepartmentSelected = (subDepartmentId) => {
        return selected.includes(subDepartmentId);
    };

    const handleSelect = (id) => {
        if (selected.includes(id)) {
            setSelected((prevSelected) => prevSelected.filter((item) => item !== id));
        } else {
            setSelected((prevSelected) => [...prevSelected, id]);
        }
    };

    return (
        <div>
            {departmentsData.map((department) => (
                <div key={department.id} className="mb-4">
                    <div className="flex items-center cursor-pointer">
                        <Typography>-</Typography>
                        <Checkbox checked={isDepartmentSelected(department.id)} onChange={() => handleSelect(department.id)} />
                        <Typography>{department.name}</Typography>
                    </div>

                    {department.subDepartments.map((subDept) => (
                        <Collapse in={isDepartmentSelected(department.id)} key={subDept.id}>
                            <div className="flex ml-4 justify-start items-center">
                                <Checkbox
                                    //to change the textbox color when checked
                                    color="secondary"
                                    checked={isSubDepartmentSelected(subDept.id)}
                                    onChange={() => handleSelect(subDept.id)}
                                />
                                {subDept.name}
                            </div>
                        </Collapse>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Component2;
