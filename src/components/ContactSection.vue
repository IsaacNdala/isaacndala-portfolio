<template>
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact__title-container">
                <h2 class="section-title text-center transition-mode" :class="{ 'dark-mode-color': darkMode }">Contact Me</h2>
                <div class="section-title-line mb-2"></div>
                <p class="contact__title-description text-center transition-mode" :class="{ 'dark-mode-color': darkMode }">
                    Get In touch. I’m currently looking for new opportunity and 
                    also open for freelance projects. Or if just want to say "hi 👋"  feel free!
                </p>
                <p class="contact__title-description text-center transition-mode" :class="{ 'dark-mode-color': darkMode }">You can also send me an email at <a href="mailto:isaacndala111@gmail.com" class="text-success">isaacndala111@gmail.com</a></p>
            </div>
            <form @submit.prevent="postContact" class="row g-3">
                <div class="col-md-6">
                    <input type="text" required class="form-control" v-model="formData.firstName" :class="{ 'dark-form-control': darkMode }" id="inputAddress" placeholder="First Name">
                </div>
                <div class="col-md-6">
                    <input type="text" required class="form-control" v-model="formData.lastName" :class="{ 'dark-form-control': darkMode }" id="inputAddress" placeholder="Last Name">
                </div>
                <div class="col-12">
                    <input type="email" required class="form-control" v-model="formData.email" :class="{ 'dark-form-control': darkMode }" placeholder="Your email address">
                </div>
                <div class="col-12">
                    <textarea class="form-control" required v-model="formData.message" :class="{ 'dark-form-control': darkMode }" placeholder="Write a your message" rows="7"></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-success contact__btn">Enviar</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

export default {
    name: 'ContactSection',
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            }
        }
    },
    computed: {
        ...mapState(['darkMode'])
    },
    methods: {
        ...mapMutations([
            'openLoader', 
            'closeLoader', 
            'openAlertSuccess', 
            'openAlertSuccess', 
            'openAlertError',
            'closeAlertSuccess',
            'closeAlertError'
        ]),
        async postContact() {
            this.openLoader()
            try {
                const result = await axios.post('http://localhost:3000/contact/post-contact', this.formData)
                if(result) {
                    setTimeout(() => {
                        this.closeLoader()
                        this.openAlertSuccess('I will reach you as soon as possible!')
                        this.formData.firstName = ''
                        this.formData.lastName = ''
                        this.formData.email = ''
                        this.formData.message = ''

                        setTimeout(() => {
                            this.closeAlertSuccess()
                        }, 5000)
                    }, 2000);
                }
            } catch (err) {
                setTimeout(()=> {
                    this.closeLoader()
                    if(err.response && err.response.status === 422) {
                        this.openAlertError(err.response.data.msg)
                    } else {
                        this.openAlertError('This an error ocured!')
                    }
                }, 2000)
            }
        }
    }
}
</script>

<style lang="scss">
.contact {
    padding-top: 6rem;
    padding-left: 1rem;
    padding-right: 1rem;

    .contact__title-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;

        .contact__title-description {
            font-weight: 500;
            max-width: 700px;

            a {
                color: #008d52;
                font-size: 1.1rem;
            }
        }
    }

    .form-control {
        border-radius: 2rem;
        padding: .8rem 1.5rem;

        &:focus {
            border-color: #91cfb6;
            outline: 0;
            box-shadow: 0 0 0 0.05rem #91cfb6;
        }
    }

    .dark-form-control {
        border-color: #91cfb6;
        border: 2px solid #91cfb6;
    }

    textarea.form-control {
        border-radius: 1.4rem;
    }

    .contact__btn {
        border-radius: 2rem;
        padding: .8rem 2rem;
        font-weight: 500;

        &:focus {
            box-shadow: none;
        }
    }
}

@media (min-width: 768px) {
    .contact {
        padding: 8rem 1rem;
    }

    .contact > .container {
        width: 40rem;
    }
}
</style>