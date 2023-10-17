let scene, camera, renderer;
let base, joint1, joint2, joint3;

function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(600, 400);
    document.getElementById('canvas3D').appendChild(renderer.domElement);

    // Add the robot joints as cylinders
    let geometry = new THREE.CylinderGeometry(0.1, 0.1, 1);
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    base = new THREE.Mesh(geometry, material);
    scene.add(base);

    joint1 = new THREE.Mesh(geometry, material);
    joint1.position.y = 0.5;
    base.add(joint1);

    joint2 = new THREE.Mesh(geometry, material);
    joint2.position.y = 0.5;
    joint1.add(joint2);

    joint3 = new THREE.Mesh(geometry, material);
    joint3.position.y = 0.5;
    joint2.add(joint3);

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function updateTargetPosition() {
    // This is where you would perform the inverse kinematics calculations
    let x = parseFloat(document.getElementById('x').value);
    let y = parseFloat(document.getElementById('y').value);
    let z = parseFloat(document.getElementById('z').value);

    // Placeholder IK function (You would replace this with a real IK solver)
    let jointAngles = computeIK(x, y, z);

    joint1.rotation.z = jointAngles[0];
    joint2.rotation.z = jointAngles[1];
    joint3.rotation.z = jointAngles[2];
}

function computeIK(x, y, z) {
    // Placeholder IK function for the example
    let theta1 = Math.atan2(y, x);
    let theta2 = Math.atan2(z, Math.sqrt(x*x + y*y));
    let theta3 = Math.PI/2 - theta1 - theta2;  // Dummy angle
    return [theta1, theta2, theta3];
}

document.addEventListener("DOMContentLoaded", initThreeJS);
