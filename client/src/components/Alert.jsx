import React from 'react';

export const Alert = ({message, success = false}) => {
    return (
        <section className="absolute w-full bg-gray-2 top-0 py-[60px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
                <div className="flex justify-end">
                    <div className="relative flex w-full max-w-[460px] items-center overflow-hidden rounded-lg bg-white px-5 py-[18px] shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
                        <span className={`mr-4 flex h-[30px] w-full max-w-[30px] items-center justify-center rounded-full border ${success ? 'border-primary' : 'border-danger'}`}>
                          {success ? (
                              <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                                  <path
                                      d="M15.15 3.34999C14.925 3.12499 14.575 3.12499 14.35 3.34999L5.85 11.6L1.65 7.47499C1.425 7.24999 1.075 7.27499 0.850003 7.47499C0.625003 7.69999 0.650003 8.04999 0.850003 8.27499L5.275 12.575C5.425 12.725 5.625 12.8 5.85 12.8C6.075 12.8 6.25 12.725 6.425 12.575L15.15 4.09999C15.375 3.92499 15.375 3.57499 15.15 3.34999Z"
                                      fill="teal"
                                  />
                              </svg>
                          ) : (
                              <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                                  <path
                                      d="M18 6L6 18M6 6L18 18"
                                      stroke="red"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                  />
                              </svg>
                          )}
                        </span>
                        <p className={`text-base font-medium ${success ? 'text-primary' : 'text-danger'} sm:text-lg`}>
                            {message}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Alert;
