import React, { useState } from 'react';
import { Checkbox, Typography, Collapse } from '@mui/material';

const Component2 = () => {
    // Hardcoded department data
    const departmentsData = [
        {
            id: 1,
            name: 'Customer Service',
            subDepartments: [
                { id: 101, name: 'Support' },
                { id: 102, name: 'Customer Success' },
            ],
        },
        {
            id: 2,
            name: 'Design',
            subDepartments: [
                { id: 201, name: 'Graphic Design' },
                { id: 202, name: 'Product Design' },
                { id: 203, name: 'Web Design' },
            ],
        },
    ];

    // State to manage selected departments and sub-departments
    const [selected, setSelected] = useState([]);
    const [expanded, setExpanded] = useState([]);

    const isDepartmentSelected = (departmentId) => {
        return selected.includes(departmentId);
    };

    const isSubDepartmentSelected = (subDepartmentId) => {
        return selected.includes(subDepartmentId);
    };

    const isDepartmentExpanded = (departmentId) => {
        return expanded.includes(departmentId);
    };

    const handleSelect = (id) => {
        if (selected.includes(id)) {
            setSelected((prevSelected) => prevSelected.filter((item) => item !== id));
        } else {
            setSelected((prevSelected) => [...prevSelected, id]);
        }
    };

    const handleDepartmentLabelClick = (departmentId) => {
        if (expanded.includes(departmentId)) {
            setExpanded((prevExpanded) => prevExpanded.filter((item) => item !== departmentId));
        } else {
            setExpanded((prevExpanded) => [...prevExpanded, departmentId]);
        }
    };

    return (
        <div>
            {departmentsData.map((department) => (
                <div key={department.id} className="mb-4">
                    <div className="flex items-center cursor-pointer" onClick={() => handleDepartmentLabelClick(department.id)}>
                        <Typography>{isDepartmentExpanded(department.id) ? '-' : '-'}</Typography>
                        <Checkbox checked={isDepartmentSelected(department.id)} onChange={() => handleSelect(department.id)} />
                        <Typography>{department.name}</Typography>
                    </div>

                    {department.subDepartments.map((subDept) => (
                        <Collapse in={isDepartmentExpanded(department.id)} key={subDept.id}>
                            <div className="flex ml-4 justify-start items-center">
                                <Checkbox
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
