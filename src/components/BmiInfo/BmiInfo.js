import React from 'react';
import RotateButton from '../RotateButton/RotateButton';


export default function BmiInfo() {
  return (
    <div>
      <RotateButton title='< Back' rotate='' />
      <h3>What Is Body Mass Index?</h3>
      <p>Body mass index (BMI) is an estimate of body fat based on height and weight. It doesn’t measure body fat directly, but instead uses an equation to make an approximation. BMI can help determine whether a person is at an unhealthy or healthy weight.
      A high BMI can be a sign of too much fat on the body, while a low BMI can be a sign of too little fat on the body. The higher a person’s BMI, the greater their chances of developing certain serious conditions, such as heart disease, high blood pressure, and diabetes. A very low BMI can also cause health problems, including bone loss, decreased immune function, and anemia.
      While BMI can be useful in screening children and adults for body weight problems, it does have its limits. BMI may overestimate the amount of body fat in athletes and other people with very muscular bodies. It may also underestimate the amount of body fat in older adults and other people who have lost muscle mass.
      </p>
    </div>
  );
}