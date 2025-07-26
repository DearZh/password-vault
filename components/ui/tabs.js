import React, { useState } from 'react';

const Tabs = ({ defaultValue, className, children, ...props }) => {
  const [value, setValue] = useState(defaultValue);
  
  // 过滤掉传递给DOM元素的自定义属性
  const filteredProps = Object.keys(props).reduce((acc, key) => {
    if (!['value', 'setValue', 'tabValue'].includes(key)) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
  
  return (
    <div className={className} {...filteredProps}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, setValue });
        }
        return child;
      })}
    </div>
  );
};

const TabsList = React.forwardRef(({ className, value, setValue, children, ...props }, ref) => {
  // 过滤掉传递给DOM元素的自定义属性
  const filteredProps = Object.keys(props).reduce((acc, key) => {
    if (!['value', 'setValue', 'tabValue'].includes(key)) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
  
  return (
    <div
      ref={ref}
      className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className || ''}`}
      {...filteredProps}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, setValue });
        }
        return child;
      })}
    </div>
  );
});

const TabsTrigger = React.forwardRef(({ className, value, setValue, tabValue, children, ...props }, ref) => {
  // 过滤掉传递给DOM元素的自定义属性
  const filteredProps = Object.keys(props).reduce((acc, key) => {
    if (!['value', 'setValue', 'tabValue'].includes(key)) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
  
  const isActive = value === tabValue;
  
  return (
    <button
      ref={ref}
      onClick={() => setValue(tabValue)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive 
          ? 'bg-background text-foreground shadow-sm' 
          : 'hover:bg-muted hover:text-foreground'
      } ${className || ''}`}
      {...filteredProps}
    >
      {children}
    </button>
  );
});

const TabsContent = React.forwardRef(({ className, value, tabValue, children, ...props }, ref) => {
  // 过滤掉传递给DOM元素的自定义属性
  const filteredProps = Object.keys(props).reduce((acc, key) => {
    if (!['value', 'setValue', 'tabValue'].includes(key)) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
  
  if (value !== tabValue) return null;
  
  return (
    <div
      ref={ref}
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className || ''}`}
      {...filteredProps}
    >
      {children}
    </div>
  );
});

export { Tabs, TabsList, TabsTrigger, TabsContent };