import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

export default function Dropdown({ title, list, handleChangedIndex }) {

    function handleMenuItemClick(_, index) {
        handleChangedIndex(index);
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div style={{}}>
                <Menu.Button
                    className="inline-flex justify-center rounded-[8px] w-full px-2 py-2 text-sm font-medium text-gray-700 shadow-md bg-[#F0F2F2] bg-opacity-30 shadow-dropdownNormal hover:bg-opacity-90 focus:outline-none focus:ring-1 focus:ring-[#007185] focus:shadow-dropdownFocus"
                >
                    {title}
                    <ChevronDownIcon
                        className="w-5 h-5 ml-3 -mr-1 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute top-0 right-0 mt-1 z-[1] origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {list.map((item, index) => {
                        return (
                            <Menu.Item key={item}>
                                {({ active }) => {
                                    const classes = clsx('group flex rounded-sm items-center w-full px-2 py-1 text-sm text-gray-900', active && 'bg-gray-300');
                                    return (
                                        <button
                                            className={classes}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {item}
                                        </button>)
                                }}
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}