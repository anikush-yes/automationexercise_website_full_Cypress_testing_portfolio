/// <reference types = "cypress" />

describe('AutomationExercise API Tests', () => {

    const baseUrl = 'https://automationexercise.com/api';

    it('01_Get All Products List', () => {
        cy.request(`${baseUrl}/productsList`).then((response) => {
            expect(response.status).to.eq(200);

            const responseBody = JSON.parse(response.body);

            expect(responseBody).to.have.property('products').and.not.be.empty;

            responseBody.products.forEach(product => {
                expect(product).to.have.property('id').that.is.a('number');
                expect(product).to.have.property('name').that.is.a('string');
                expect(product).to.have.property('price').that.is.a('string');
                expect(product).to.have.property('brand').that.is.a('string');
            });
        });
    });

    it('02_POST To All Products List - Not Supported', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/productsList`,
            body: {
                name: 'Test Product',
                price: '10.99',
                category: 'Clothes'
            },
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            expect(response.status).to.eq(200);

            const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            expect(responseBody).to.have.property('responseCode', 405);
            expect(responseBody).to.have.property('message', 'This request method is not supported.');
        });
    });

    it('03_Get All Brands List', () => {
        cy.request(`${baseUrl}/brandsList`).then((response) => {

            const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            expect(response.status).to.eq(200);
            expect(responseBody).to.have.property('brands').that.is.an('array').and.not.be.empty;
        });
    });

    it('04_PUT To All Brands List - Not Supported', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}/brandsList`,
        }).then((response) => {
            expect(response.status).to.eq(200);

            const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            expect(responseBody).to.have.property('responseCode', 405);
            expect(responseBody).to.have.property('message', 'This request method is not supported.');
        });
    });

    it('05_POST To Search Product', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/searchProduct`,
            headers: { 'Content-Type': 'application/json' },
            form: true,
            body: {
                search_product: 'jeans'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);

            const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
            expect(responseBody).to.have.property('products').that.is.an('array').and.not.be.empty;
            const jeansProduct = responseBody.products.some(product =>
                product.name.toLowerCase().includes('jeans')
            );
            expect(jeansProduct, 'At least one product should contain "jeans" in its name').to.be.true;
        });
    });

    it('06_POST To Search Product without search_product parameter', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/searchProduct`,
            form: true,
            body: {},

        }).then((response) => {
            expect(response.status).to.eq(200);

            const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
            expect(responseBody).to.have.property('responseCode', 400);
            expect(responseBody).to.have.property('message', 'Bad request, search_product parameter is missing in POST request.');
        });
    });

    it('07_POST To Verify Login with valid details', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/verifyLogin`,
            form: true,
            body: {
                email: 'test200@example.com',
                password: 'Test1234'
            },
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {

            const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            expect(response.status).to.eq(200);
            expect(responseBody).to.have.property('message', 'User exists!');
        });
    });

    it('08_POST To Verify Login without email parameter', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/verifyLogin`,
            form: true,
            body: {
                password: 'Test1234'
            },
            headers: { 'Content-Type': 'application/json' }

        }).then((response) => {
            expect(response.status).to.eq(200);

            const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            expect(responseBody).to.have.property('responseCode', 400);
            expect(responseBody).to.have.property('message', 'Bad request, email or password parameter is missing in POST request.');
        });
    });

    it('09_DELETE To Verify Login - Not Supported', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/verifyLogin`,
        }).then((response) => {
            expect(response.status).to.eq(200);

            const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            expect(responseBody).to.have.property('responseCode', 405);
            expect(responseBody).to.have.property('message', 'This request method is not supported.');
        });
    });

    it('10_POST To Verify Login with invalid details', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/verifyLogin`,
            form: true,
            body: {
                email: 'invalid@example.com',
                password: 'wrongpassword'
            },
            headers: { 'Content-Type': 'application/json' }

        }).then((response) => {
            expect(response.status).to.eq(200);

            const responseBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            expect(responseBody).to.have.property('responseCode', 404);
            expect(responseBody).to.have.property('message', 'User not found!');
        });
    });


    it('11_POST To Create/Register User Account', () => {

        const userData = {
            name: 'Test User',
            email: 'Newuser8@example.com',
            password: 'testpassword',
            title: 'Mr',
            birth_date: '10',
            birth_month: '02',
            birth_year: '1999',
            firstname: 'Peter',
            lastname: 'Peterson',
            company: 'SomeCompany',
            address1: 'Test Street 123',
            address2: 'Test ap. 123',
            country: 'Krakochia',
            zipcode: '1234',
            state: 'Unknown',
            city: 'Some',
            mobile_number: '65486574874887'
        };

        cy.request({
            method: 'POST',
            url: `${baseUrl}/createAccount`,
            body: userData,
            form: true,
            failOnStatusCode: false
        }).then((response) => {

            let respData;
            try {
                respData = typeof response.body === 'string'
                    ? JSON.parse(response.body)
                    : response.body;
            } catch (error) {
                throw new Error('Failed to parse JSON response: ' + error.message);
            }

            expect(response.status).to.equal(200);
            expect(respData.responseCode).to.be.a('number').and.equal(201);
            expect(respData.message).to.be.a('string').and.equal('User created!');
        });

    });


    it('13_PUT To Update User Account', () => {

        const userData = {
            email: 'Newuser8@example.com',
            name: 'Test User',
            password: 'testpassword',
            title: 'Mr',
            birth_date: '10',
            birth_month: '02',
            birth_year: '1999',
            firstname: 'Peter',
            lastname: 'Peterson',
            company: 'UpdatedCompany',
            address1: 'Updated Street 456',
            address2: 'Updated ap. 789',
            country: 'Krakochia',
            zipcode: '1234',
            state: 'Unknown',
            city: 'NewUpdatedCity', // Updated city
            mobile_number: '9876543210'
        };

        cy.request({
            method: 'PUT',
            url: 'https://automationexercise.com/api/updateAccount',
            body: userData,
            form: true,
            failOnStatusCode: false,
        }).then((response) => {
            cy.log('Response Status:', response.status);
            cy.log('Response Body:', response.body);

            let respData;
            try {
                respData = typeof response.body === 'string'
                    ? JSON.parse(response.body)
                    : response.body;
            } catch (error) {
                cy.log('Parse Error:', error.message);
                throw new Error('Failed to parse JSON response: ' + error.message);
            }

            expect(response.status).to.equal(200);
            expect(respData.responseCode).to.be.a('number').and.equal(200);
            expect(respData.message).to.be.a('string').and.equal('User updated!');
        });
    });


    it('14_GET User Account Detail by Email', () => {
        const email = 'Newuser7@example.com'; // Ensure this email exists in the system

        cy.request({
            method: 'GET',
            url: `${baseUrl}/getUserDetailByEmail?email=${email}`,
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {

            const responseBody = typeof response.body === 'string'
                ? JSON.parse(response.body)
                : response.body;


            expect(responseBody).to.have.property('user').that.is.an('object');


        });
    });

    it('12_DELETE User Account', () => {

        const userData = {
            email: 'Newuser8@example.com',
            password: 'testpassword'
        };

        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/deleteAccount`,
            body: userData,
            form: true,
            failOnStatusCode: false
        }).then((response) => {


            let respData;
            try {
                respData = typeof response.body === 'string'
                    ? JSON.parse(response.body)
                    : response.body;
            } catch (error) {
                throw new Error('Failed to parse JSON response: ' + error.message);
            }

            expect(response.status).to.equal(200);


            expect(respData.responseCode).to.be.a('number').and.equal(200);

            expect(respData.message).to.be.a('string').and.equal('Account deleted!');
        });

    })
});
